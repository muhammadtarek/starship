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
    img.setAttribute("src", "../images/enemy-plane-army.png");
    
    img.style.top = Math.floor(Math.random()*900).toString() + "px";
    img.id = this.enemyCounter.toString();

    document.getElementById("gameContainer").appendChild(img);
    
    let enemyObj = new Enemy(img.id, img, 'enemyA');

    // add enemy object to enemies list
    Observer.addEnemy(enemyObj);
    enemyObj.move();
    this.enemyCounter++;
  };

  /**
   * Inits player object, setInterval for creating enemies depending on the current level
   * Sets another interval that calls `Observer.observePlayerBullets` and `Observer.observeEnemiesBullets`
   */
  static start = () => {
    
    // Create enemies
    intervalID = setInterval(() => {
      this.createEnemy();
    }, 2000);
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

//export default Game;
