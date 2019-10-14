/* eslint-disable no-unused-vars */
// @ts-check

class Observer {
  static playerBullets = [];

  static enemiesBullets = [];

  static enemies = [];

  /**
   * Adds new bullet to either playerBullets/enemiesBullets
   */
  static addBullet = bullet => {
    console.log(bullet);
    this.playerBullets.push(bullet);
  };

  /**
   * Remove bullet when it's position is out windows or hit it's objective
   */
  static removeBullet = bullet => {};

  /**
   * Adds new enemy to enemies list
   */
  static addEnemy = enemy => {
    // console.log(enemy);
    Observer.enemies.push(enemy);
  };

  /**
   * Remove an enemy from enemies list
   */
  static removeEnemy = enemy => {};

  /**
   * Track all bullets from player and enemies position
   */
  static observePlayerBullets = player => {};

  /**
   * Track all bullets from enemies and player position
   */
  static observeEnemiesBullets = () => {};

  /**
   * Clean all observer arrays
   */
  static clean = () => {};
}

//export default Observer;
