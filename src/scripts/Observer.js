/* eslint-disable no-unused-vars */
// @ts-check

class Observer {
  static playerBullets = [];

  static enemiesBullets = [];

  static enemies = [];

  static playerObject;

  /**
   * Adds new enemy to enemies list
   */
  static addEnemy = enemy => {
    Observer.enemies.push(enemy);
  };

  /**
   * Adds new bullet to either playerBullets/enemiesBullets
   */
  static addBullet = bullet => {
    this.playerBullets.push(bullet);
  };

  /**
   * Remove bullet when it's position is out windows or hit it's objective
   */
  static removeBullet = bullet => {
    if (bullet.creator == 'player') {
      const index = Observer.playerBullets.indexOf(bullet);
      Observer.playerBullets.splice(index, 1);
    } else {
      const index = Observer.enemiesBullets.indexOf(bullet);
      Observer.enemiesBullets.splice(index, 1);
    }

    let bulletID = bullet.id;
    var elem = document.getElementById(bulletID);
    elem.parentNode.removeChild(elem);
  };

  /**
   * Remove an enemy from enemies list
   */
  static removeEnemy = enemy => {
    //Remove enemy Obj from Observer.enemies
    const enemyIndex = Observer.enemies.indexOf(enemy);
    Observer.enemies.splice(enemyIndex, 1);

    //Remove enemy img element tag 
    let enemyElement = document.getElementById(enemy.id);
    enemyElement.parentNode.removeChild(enemyElement);
  }
  
  /**
   * Track all bullets from player and enemies position
   */
  static observePlayerBullets = () => {
    Observer.clean();
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
  static observeEnemiesBullets = () => {
    for (const enemyBullet of this.enemiesBullets) {
      if (Observer.intersectRect(enemyBullet.HTMLelementTag, Observer.playerObject.playerElement))
          Observer.removeBullet(enemyBullet);
    }
  };

  static observeEnemiesObjs = () => {
    for (const enemy of Observer.enemies) {
      if (Observer.intersectRect(enemy.HTMLelementTag, Observer.playerObject.playerElement))
          Observer.removeEnemy(enemy);
      
    }
  }

  /**
   * Clean all observer arrays
   */
  static clean = () => {
    for (const playerRocket of this.playerBullets) {
      if (playerRocket.HTMLelementTag.getBoundingClientRect().left > window.innerWidth)
        Observer.removeBullet(playerRocket);
    }
    for (const Enemy of this.enemies) {
      if (Enemy.HTMLelementTag.getBoundingClientRect().right < 0)
        Observer.removeEnemy(Enemy);
    }
    for (const enemyRocket of this.enemiesBullets) {
      if (enemyRocket.HTMLelementTag.getBoundingClientRect().right < 0)
        Observer.removeBullet(enemyRocket);
    }
  };

  static intersectRect = (r11, r22) => {
    let r1 = r11.getBoundingClientRect();
    let r2 = r22.getBoundingClientRect();
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
  }

  static getRandomEnemy = () => {
    return Math.floor(Math.random() * Observer.enemies.length);
  }
}













/*
  static enemyFire = () => {
    for (var i=0; i < Observer.enemies.length; i++) {
      console.log(Observer.enemies[i].length);

      Observer.enemies[i].fire();
     }
   }
}
*/
//setInterval(Observer.enemyFire(), 500);

//export default Observer;
