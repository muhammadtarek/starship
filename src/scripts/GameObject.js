class GameObject {
  /**
   * @param {number} health
   * @param {HTMLElement} element
   */
  constructor(health, element) {
    this.health = health;
    this.element = element;
  }

  /**
   * Move player/enemy
   * @interface
   */
  move = () => {};

  /**
   * Create a new instance of Bullet object then call `observer.addBullet`
   * @interface
   */
  fire = () => {};
}
