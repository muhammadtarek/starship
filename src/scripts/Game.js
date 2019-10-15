let enemyCreationInterval;
let enemyFireInterval;
let collisionCheckInterval;
let observeEnemyBulletsInterval;
let observeEnemyPositionInterval;

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
  static createEnemy = () => {
    const img = document.createElement('img');
    img.className = 'enemy';
    img.setAttribute('src', './assets/EnemyPlane_1.png');
    img.style.position = 'fixed';
    img.style.objectFit = 'cover';
    img.style.width = '200px';
    img.style.left = '90%';
    img.style.top = `${Math.floor(Math.random() * (window.innerHeight - img.height)) + 90}px`;
    img.id = this.enemyCounter.toString();
    const enemyObj = new Enemy(img.id, img, 'enemyA');
    document.getElementById('play-area').appendChild(img);
    // add enemy object to enemies list
    Observer.addEnemy(enemyObj);
    enemyObj.move();
    this.enemyCounter++;
  };

  /**
   *  Creates a new instance of Enemy and set it's starting position
   */

  static createPlayer = () => {
    const img = document.createElement('img');
    img.id = 'player';
    img.style.height = '150px';
    img.style.width = '200px';
    img.style.position = 'fixed';

    console.log(`./assets/${gameConfigriation.characterName}`);
    
    img.setAttribute('src',`./assets/${gameConfigriation.characterName}`);
    


    img.style.top = `${window.innerHeight / 2 - parseInt(img.style.height.slice(0, -2)) + 90}px`;
    document.getElementById('play-area').appendChild(img);

    const player = new Player('PLayer', img);
    Observer.playerObject = player;
    document.addEventListener('keydown', event => {
      player.move(event.keyCode);
    });
  };

  /**
   * Inits player object, setInterval for creating enemies depending on the current level
   * Sets another interval that calls `Observer.observePlayerBullets` and `Observer.observeEnemiesBullets`
   */
  static start = () => {
    // Create Player
    this.createPlayer();

    // Create enemies
    enemyCreationInterval = setInterval(() => {
      this.createEnemy();
    }, 1000 /* this.level.respawnTime.enemyA */);

    enemyFireInterval = setInterval(() => {
      const enemyIndex = Observer.getRandomEnemy();
      if (Observer.enemies.length > 0) Observer.enemies[enemyIndex].fire();
    }, 750);

    collisionCheckInterval = setInterval(() => {
      Observer.observePlayerBullets();
    }, 200);

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
  };

  /**
   * Ends the game once the player health is 0
   */
  static checkGameStatus = () => {};

  static updatePlayerScore = (score = 50) => {
    const scoreElement = document.getElementById('Score');
    this.score += score;
    scoreElement.textContent = this.score;
  };

  static updatePlayerHealth = () => {
    const healthBar = document.getElementById('slider');
    if (healthBar.offsetWidth <= 50) {
      console.log('Game over');
    }
    healthBar.style.width = `${healthBar.offsetWidth - 50}px`;
    if (healthBar.offsetWidth > 200) {
      healthBar.style.backgroundColor = 'green';
    } else {
      healthBar.style.backgroundColor = 'red';
    }
  };
}
