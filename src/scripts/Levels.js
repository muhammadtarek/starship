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

  static setLevelProperty = gameLevel => {
    switch (gameLevel) {
      case Levels.easy:
        return new Level(new LevelProperty(5, 10, null), new LevelProperty(1, 1, 1), new LevelProperty(2000, 1000, null));
        break;

      case Levels.medium:
        return new Level(new LevelProperty(10, 20, null), new LevelProperty(1, 2, 1), new LevelProperty(1000, 800, null));
        break;

      case Levels.large:
        return new Level(new LevelProperty(15, 30, 100), new LevelProperty(2, 3, 1), new LevelProperty(800, 600, 5000));
        break;

      default:
        break;
    }
  };
}
