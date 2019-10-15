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
   * Remove an enemy from enemies list
   */
  static removeEnemy = enemy => {
    // Remove enemy Obj from Observer.enemies
    const enemyIndex = Observer.enemies.indexOf(enemy);
    Observer.enemies.splice(enemyIndex, 1);

    // Remove enemy img element tag
    const enemyElement = document.getElementById(enemy.id);
    enemyElement.parentNode.removeChild(enemyElement);
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
    if (bullet.creator === Creator.player) {
      const index = Observer.playerBullets.indexOf(bullet);
      Observer.playerBullets.splice(index, 1);
    } else {
      const index = Observer.enemiesBullets.indexOf(bullet);
      Observer.enemiesBullets.splice(index, 1);
    }

    const elem = document.getElementById(bullet.id);
    elem.parentNode.removeChild(elem);
  };

  /**
   * Track all bullets from player and enemies position
   */
  static observePlayerBullets = () => {
    Observer.clean();
    for (const playerRocket of this.playerBullets) {
      for (const enemy of this.enemies) {
        if (Observer.isRectsIntersect(playerRocket.element, enemy.element) == true) {
          Observer.removeEnemy(enemy);
          Observer.removeBullet(playerRocket);
          Game.updatePlayerScore();
        }
      }
    }
  };

  /**
   * Track all bullets from enemies and player position
   */
  static observeEnemiesBullets = () => {
    for (const enemyBullet of this.enemiesBullets) {
      if (Observer.isRectsIntersect(enemyBullet.element, Observer.playerObject.playerElement)) {
        Game.updatePlayerHealth(enemyBullet.damage);
        Observer.removeBullet(enemyBullet);
      }
    }
  };

  static observeEnemiesPosition = () => {
    for (const enemy of Observer.enemies) {
      if (Observer.isRectsIntersect(enemy.element, Observer.playerObject.playerElement)) {
        Game.updatePlayerHealth(50);
        Observer.removeEnemy(enemy);
      }
    }
  };

  /**
   * Clean objects when they are out of screen bounds
   */
  static clean = () => {
    // Remove player bullets once out of screen bounds
    for (const playerRocket of this.playerBullets) {
      if (playerRocket.element.getBoundingClientRect().left > window.innerWidth) {
        Observer.removeBullet(playerRocket);
      }
    }

    // Remove enemies once out of screen bounds
    for (const enemy of this.enemies) {
      if (enemy.element.getBoundingClientRect().right < 0) {
        Observer.removeEnemy(enemy);
      }
    }

    // Remove enemy bullets once out of screen bounds
    for (const enemyRocket of this.enemiesBullets) {
      if (enemyRocket.element.getBoundingClientRect().right < 0) {
        Observer.removeBullet(enemyRocket);
      }
    }
  };

  /**
   *
   */
  static isRectsIntersect = (rect_1, rect_2) => {
    const r1 = rect_1.getBoundingClientRect();
    const r2 = rect_2.getBoundingClientRect();
    return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
  };

  static getRandomEnemy = () => {
    return Math.floor(Math.random() * Observer.enemies.length);
    // return 0;
  };
}
