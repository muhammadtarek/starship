/* eslint-disable no-unused-vars */
// @ts-check

class Observer {
  static playerBullets = [];

  static enemiesBullets = [];

  static enemies = [];
  static playerObject;

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
  static removeBullet = bullet => {
    const index = Observer.playerBullets.indexOf(bullet);
    Observer.playerBullets.splice(index, 1);
    let bulletID = bullet.id;
    var elem = document.getElementById(bulletID);
    elem.parentNode.removeChild(elem);
  };

  /**
   * Adds new enemy to enemies list
   */
  static addEnemy = enemy => {
    Observer.enemies.push(enemy);

  };

  /**
   * Remove an enemy from enemies list
   */
  static removeEnemy = enemy => {
    const index = Observer.enemies.indexOf(enemy);
    Observer.enemies.splice(index, 1);
    let enemyID = enemy.id;
    var elem = document.getElementById(enemyID);
    elem.parentNode.removeChild(elem);
  };

  /**
   * Track all bullets from player and enemies position
   */
  static observePlayerBullets = () => {

    for (const playerRocket of this.playerBullets) {
      for (const Enemy of this.enemies) {
        if (Observer.intersectRect(playerRocket.HTMLelementTag, Enemy.HTMLelementTag) == true) {
          Observer.removeEnemy(Enemy);
          Observer.removeBullet(playerRocket);
        }
      }
    }

  };

  /**
   * Track all bullets from enemies and player position
   */
  static observeEnemiesBullets = () => {};

  /**
   * Clean all observer arrays
   */
  static clean = () => {};

  static intersectRect = (r11, r22) => {
    let r1 = r11.getBoundingClientRect();
    let r2 = r22.getBoundingClientRect();
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
  }

}

//export default Observer;
