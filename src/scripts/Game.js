let enemyCreationInterval;
let enemyFireInterval;
let collisionCheckInterval;
let observeEnemyBulletsInterval;
let observeEnemyPositionInterval;
let missileFireInterval;
class Game {
  static score = 0;

  static enemyCounter = 1;

  static playerName = '';

  static playerType = 0;

  static level = Level.setLevelProperty(Levels.easy);

  static setLevel = gameLevel => {
    // console.log(gameLevel);
    this.level = Level.setLevelProperty(parseInt(gameLevel));
  };

  static setPlayerType = playerType => {
    Game.playerType = playerType;
  };

  /**
   * Creates a new instance of Enemy and set it's starting position
   */
  static createEnemy = (type = 1, health = 100) => {
    const img = document.createElement('img');
    img.className = 'enemy';
    img.setAttribute('src', `./src/assets/EnemyPlane_${type + 1}.png`);
    img.style.position = 'fixed';
    img.style.objectFit = 'cover';
    img.style.width = '200px';
    img.style.left = '90%';
    img.style.top = `${Math.floor(Math.random() * (window.innerHeight - img.height)) + 90}px`;
    img.id = this.enemyCounter.toString();
    const enemyObj = new Enemy(img.id, img, 'enemyA', health);
    document.getElementById('play-area').appendChild(img);
    // add enemy object to enemies list
    Observer.addEnemy(enemyObj);
    enemyObj.move();
    this.enemyCounter++;
  };

  static createMisile = () => {
    const img = document.createElement('img');
    img.setAttribute('src', `./src/assets/Missile.png`);
    img.style.position = 'fixed';
    img.style.objectFit = 'cover';
    img.style.width = '100px';
    img.style.left = '90%';
    img.style.top = `${Math.floor(Math.random() * (window.innerHeight - img.height)) + 90}px`;
    img.id = 'missile';
    const missileObj = new Bullet('missile', 100, 'missile', img);
    document.getElementById('play-area').appendChild(img);

    missileObj.move();
    Observer.enemiesBullets.push(missileObj);
  }

  /**
   *  Creates a new instance of Enemy and set it's starting position
   */

  static createPlayer = () => {
    const img = document.createElement('img');
    img.id = 'player';
    img.draggable = false;
    img.style.height = '150px';
    img.style.width = '200px';
    img.style.position = 'fixed';
    img.setAttribute('src', `./src/assets/Plane${parseInt(Game.playerType) + 1}.png`);

    img.style.top = `${window.innerHeight / 2 - parseInt(img.style.height.slice(0, -2)) + 90}px`;
    document.getElementById('play-area').appendChild(img);

    const player = new Player('PLayer', img);
    Observer.playerObject = player;
    document.addEventListener('keydown', event => {
      player.move(event.keyCode);
    });

    document.addEventListener("mousemove", player.movee, true);

    document.onselectstart = function () {
      window.getSelection().removeAllRanges();
    };
    document.addEventListener('click', event => {
      player.fire(event.keyCode);
    });
  };

  /**
   * Inits player object, setInterval for creating enemies depending on the current level
   * Sets another interval that calls `Observer.observePlayerBullets` and `Observer.observeEnemiesBullets`
   */
  static start = () => {
    // Create Player
    this.createPlayer();

    const enemyTypes = ['enemyA', 'enemyB'];
    let randomNextEnemy = Math.floor(Math.random() * 2);

    // Create enemies
    enemyCreationInterval = setInterval(() => {
      randomNextEnemy = Math.floor(Math.random() * 2);
      this.createEnemy(randomNextEnemy, this.level.health[enemyTypes[randomNextEnemy]]);
    }, this.level.respawnTime[enemyTypes[randomNextEnemy]]);

    enemyFireInterval = setInterval(() => {
      const enemyIndex = Observer.getRandomEnemy();
      if (Observer.enemies.length > 0) Observer.enemies[enemyIndex].fire();
    }, 750);

    if (this.level.respawnTime.missile == 8000) {
      missileFireInterval = setInterval(() => {
        this.createMisile();
      }, this.level.respawnTime.missile);
    }

    collisionCheckInterval = setInterval(() => {
      Observer.observePlayerBullets();
    }, 20);

    observeEnemyBulletsInterval = setInterval(() => {
      Observer.observeEnemiesBullets();
    }, 20);

    observeEnemyPositionInterval = setInterval(() => {
      Observer.observeEnemiesPosition();
    }, 100);
  };




  /**
   * Ends the game
   */
  static end = () => {
    clearInterval(enemyCreationInterval);
    clearInterval(collisionCheckInterval);
    clearInterval(enemyFireInterval);
    clearInterval(observeEnemyBulletsInterval);
    clearInterval(observeEnemyPositionInterval);
    clearInterval(missileFireInterval);
  };


  static updatePlayerScore = (score = 50) => {
    const scoreElement = document.getElementById('Score');
    this.score += score;
    scoreElement.textContent = this.score;
  };

  static updatePlayerHealth = damage => {
    const healthBar = document.getElementById('slider');
    if (healthBar.offsetWidth <= 50) {
      var GameOverBTN = document.getElementById('GameOverBTN');
      var PlayerScore = document.getElementById('Player-score');
      PlayerScore.textContent = this.score;
      GameOverBTN.click();
      Game.end();
    }
    healthBar.style.width = `${healthBar.offsetWidth - damage}px`;
    if (healthBar.offsetWidth > 200) {
      healthBar.style.backgroundColor = 'green';
    } else {
      healthBar.style.backgroundColor = 'red';
    }
  };
}
