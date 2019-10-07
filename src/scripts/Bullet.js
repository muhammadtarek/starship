/* eslint-disable class-methods-use-this */
// @ts-check

class Bullet {
  /**
   * Create a new bullet
   * @param {string} id
   * @param {number} damage
   * @param {Creator} creator
   */
  constructor(id, damage, creator) {
    this.id = id;
    this.damage = damage;
    this.creator = creator;

    // TODO: Create <img /> tag
  }

  /**
   * Move bullet
   * @todo
   */
  move = () => {};
}

export default Bullet;
