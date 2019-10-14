/* eslint-disable class-methods-use-this */
// @ts-check

class GameObject {
  /**
   * @param {number} health
   * @param {HTMLElement} HTMLelementTag
   */
  constructor(health, HTMLelementTag) {
    this.health = health;
    this.HTMLelementTag = HTMLelementTag;
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

//export default GameObject;
