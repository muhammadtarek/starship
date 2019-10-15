//import LevelProperty from './LevelProperty';

class Level {
  /**
   *
   * @param {LevelProperty} damage
   * @param {LevelProperty} health
   * @param {LevelProperty} respawnTime
   */
  constructor(damage, health, respawnTime) {
    this.damage = damage;
    this.health = health;
    this.respawnTime = respawnTime;
  }

  static setLevelProperty = (gameLevel) => {

    switch (gameLevel) {
      case 'easy':
          return new Level(
            new LevelProperty(5, 10, null),
            new LevelProperty(1, 1, 1),
            new LevelProperty(2000, 10, null),
          );
          break;

      case 'medium':
          return new Level(
            new LevelProperty(10, 20, null),
            new LevelProperty(1, 2, 1),
            new LevelProperty(800, 5, null),
          );
          break;
      
      case 'hard':
          return new Level(
            new LevelProperty(15, 30, 100),
            new LevelProperty(2, 3, 1),
            new LevelProperty(400, 3, 5),
          );
          break;

        default:
          break;
      }
    }
  }

  /*
  const easyLevel = new Level(
  new LevelProperty(5, 10, null),
  new LevelProperty(1, 1, 1),
  new LevelProperty(5, 10, null),
);

  const mediumLevel = new Level(
  new LevelProperty(10, 20, null),
  new LevelProperty(1, 2, 1),
  new LevelProperty(3, 5, null),
);

  const  hardLevel = new Level(
  new LevelProperty(15, 30, 100),
  new LevelProperty(2, 3, 1),
  new LevelProperty(2, 3, 5),
);
*/


//console.log(Level.setLevelProperty('easy').respawnTime.enemyA);


