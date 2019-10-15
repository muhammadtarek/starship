class LevelProperty {
  /**
   * Creates a level config
   * @param {string|number} enemyA
   * @param {string|number} enemyB
   * @param {string|number} missile
   */
  constructor(enemyA, enemyB, missile) {
    this.enemyA = enemyA;
    this.enemyB = enemyB;
    this.missile = missile;
  }
}

export default LevelProperty;
