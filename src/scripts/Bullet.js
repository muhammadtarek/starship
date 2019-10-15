class Bullet {
  /**
   * Create a new bullet
   * @param {string} id
   * @param {number} damage
   * @param {Creator} creator
   */
  constructor(id, damage, creator, element) {
    this.id = id;
    this.damage = damage;
    this.creator = creator;
    this.element = element;
  }

  /**
   * Move bullet
   * @todo
   */
  move = () => {
    this.element.getBoundingClientRect();
    this.element.style.transition = `transform 3s linear`;
    if (this.creator === Creator.player) {
      this.element.style.transform = `translate(${window.innerWidth}px,0px)`;
    } else {
      this.element.style.transform = `translate(-${window.innerWidth}px,0px)`;
    }
  };
}
