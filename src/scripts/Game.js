//import { easyLevel } from './Levels';

var intervalID;
class Game {
  static player = {};

  static score = 0;

  static enemyCounter = 0;

  //static level = easyLevel;

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
    let pplayer = new Player("mostafa");
    pplayer.playerElement = document.createElement("img");
    pplayer.playerElement.id = "player";
    pplayer.playerElement.style.height = '150px';
    pplayer.playerElement.style.width = '200px';
    pplayer.playerElement.style.position = 'fixed';
    pplayer.playerElement.setAttribute("src", "./assets/PlayerPlane_1.png");
    pplayer.playerElement.style.top = (window.innerHeight / 2 -
      parseInt(pplayer.playerElement.style.height.slice(0, -2))) + 90 + 'px';
    document.getElementById("play-area").appendChild(pplayer.playerElement);
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
    }, 100);
  };

  /**
   * Ends the game
   */
  static end = () => {
    clearInterval(intervalID);
  };

  /**
   * Ends the game once the player health is 0
   */
  static checkGameStatus = () => {};


}

//START GAME
Game.start();
