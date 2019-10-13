// @ts-check
//import GameObject from './GameObject';

class Enemy extends GameObject {
  /**
   * @param {string} id
   * @param {EnemyType} type
   */
  constructor(id, type) {
    // TODO: Pass health to super class
    super(100);
    this.id = id;
    this.type = type;
  }
}

//export default Enemy;
