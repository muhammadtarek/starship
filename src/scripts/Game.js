//import { easyLevel } from './Levels';

var intervalID;
var intervalIDenemyFire;
var intervalIDCollision;


class Game {

  static score = 0;

  static enemyCounter = 1;

  static level;
/*
    (function setLevel() {
      this.level = Level.setLevelProperty('easy');
    })();*/
    
    
    static setLevel = (gameLevel)  => {
      //console.log(gameLevel);
      this.level = Level.setLevelProperty(gameLevel);
    }

  /**
   * Creates a new instance of Enemy and set it's starting position
   */
  static createEnemy = () => {
    var img = document.createElement("img");
    img.className = "enemy";
    img.setAttribute("src", "./assets/EnemyPlane_1.png");
    img.style.position = 'fixed';
    img.style.objectFit = 'cover';
    img.style.width = '200px';
    img.style.left = '90%';
    img.style.top = (Math.floor(Math.random() * (window.innerHeight - img.height)) + 90) + "px";
    img.id = this.enemyCounter.toString();
    let enemyObj = new Enemy(img.id, img, 'enemyA');
    document.getElementById("play-area").appendChild(img);
    // add enemy object to enemies list
    Observer.addEnemy(enemyObj);
    enemyObj.move();
    this.enemyCounter++;
  };

  /**
   *  Creates a new instance of Enemy and set it's starting position
   */

  static createPlayer = () => {
    var img = document.createElement("img");
    img.id = "player";

    img.style.height = '150px';
    img.style.width = '200px';
    img.style.position = 'fixed';
    img.setAttribute("src", "./assets/PlayerPlane_1.png");
    img.style.top = (window.innerHeight / 2 -
      parseInt(img.style.height.slice(0, -2))) + 90 + 'px';
    document.getElementById("play-area").appendChild(img);
    let pplayer = new Player('mostafa', img);
    Observer.playerObject = pplayer;
    document.addEventListener('keydown', event => {
      pplayer.move(event.keyCode);
    });
  };

  /**
   * Inits player object, setInterval for creating enemies depending on the current level
   * Sets another interval that calls `Observer.observePlayerBullets` and `Observer.observeEnemiesBullets`
   */
  static start = () => {

    //Create Player
    this.createPlayer();
    // Create enemies
    intervalID = setInterval(() => {
      this.createEnemy();
      
    }, 1000/*this.level.respawnTime.enemyA*/);

    intervalIDenemyFire = setInterval(() => {
      let enemyIndex = Observer.getRandomEnemy();
      if(Observer.enemies.length > 0)
        Observer.enemies[enemyIndex].fire();
    }, 750);

    let intervalIDCollision = setInterval(() => {
      Observer.observePlayerBullets();
    }, 200);
  
    let intervalEnemeyFireCollision = setInterval(() => {
        Observer.observeEnemiesBullets();
    }, 20);

    let intervalEnemyColision = setInterval(() => {
      Observer.observeEnemiesObjs();
    }, 100);
  
}

  /**
   * Ends the game
   */
  static end = () => {
    clearInterval(intervalID);
    clearInterval(intervalIDCollision);
  };

  /**
   * Ends the game once the player health is 0
   */
  static checkGameStatus = () => {};

  static PlayerScore = () => {
      var Score = document.getElementById("Score");
      this.score +=  50;
      Score.textContent = this.score;
    // console.log("score : " + this.score);
      
    };
  static PlayerHealth = () =>{
    var Health = document.getElementById("slider");
    if( Health.offsetWidth <= 50){
      console.log("Game over");
    }
    Health.style.width = (Health.offsetWidth - 50) + "px" ;
    if(Health.offsetWidth > 200){
      Health.style.backgroundColor = "green";
    }
    else{
      Health.style.backgroundColor = "red";
    } 
  };
}
 

//Sel Level
Game.setLevel('easy');

//START GAME
Game.start();
