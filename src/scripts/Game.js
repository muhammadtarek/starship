// import {
//   easyLevel
// } from './Levels';

class Game {
  static player = {};

  static score = 0;

  // static level = easyLevel;

  /**
   * Creates a new instance of Enemy and set it's starting position
   */
  static createEnemy = () => {};

  /**
   *  Creates a new instance of Enemy and set it's starting position
   */

  static createPlayer = () => {
    let pplayer = new Player("mostafa");
    pplayer.playerElement = document.getElementById('player');
    pplayer.playerElement.style.top = (window.innerHeight / 2 - pplayer.playerElement.height) + 'px';
    document.addEventListener('keydown', event => {
      console.log(event.keyCode);
      pplayer.move(event.keyCode);
    });
  };

  /**
   * Inits player object, setInterval for creating enemies depending on the current level
   * Sets another interval that calls `Observer.observePlayerBullets` and `Observer.observeEnemiesBullets`
   */
  static start = () => {};

  /**
   * Ends the game
   */
  static end = () => {};

  /**
   * Ends the game once the player health is 0
   */
  static checkGameStatus = () => {};


}

// export default Game;
