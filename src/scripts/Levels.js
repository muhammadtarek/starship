import LevelProperty from './LevelProperty';

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
}

export const easyLevel = new Level(
  new LevelProperty(5, 10, null),
  new LevelProperty(1, 1, 1),
  new LevelProperty(5, 10, null),
);

export const mediumLevel = new Level(
  new LevelProperty(10, 20, null),
  new LevelProperty(1, 2, 1),
  new LevelProperty(3, 5, null),
);

export const hardLevel = new Level(
  new LevelProperty(15, 30, 100),
  new LevelProperty(2, 3, 1),
  new LevelProperty(2, 3, 5),
);
