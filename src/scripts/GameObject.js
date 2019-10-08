/* eslint-disable class-methods-use-this */
// @ts-check

class GameObject {
  /**
   * @param {number} health
   */
  constructor(health) {
    this.health = health;

    // TODO: Create <img /> tag
  }

  /**
   * Move player/enemy
   * @todo
   */
  move = () => {};

  /**
   * Create a new instance of Bullet object then call `observer.addBullet`
   * @todo
   */
  fire = () => {};
}

export default GameObject;
