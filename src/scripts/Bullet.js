/* eslint-disable class-methods-use-this */
// @ts-check

class Bullet {
  /**
   * Create a new bullet
   * @param {string} id
   * @param {number} damage
   * @param {Creator} creator
   */
  constructor(id, damage, creator, HTMLelementTag) {
    this.id = id;
    this.damage = damage;
    this.creator = creator;
    this.HTMLelementTag = HTMLelementTag;
    // TODO: Create <img /> tag
  }

  /**
   * Move bullet
   * @todo
   */
  move = () => {
    this.HTMLelementTag.getBoundingClientRect();
    this.HTMLelementTag.style.transition = `transform 3s linear`;
    if (this.creator == 'player')
      this.HTMLelementTag.style.transform = `translate(${window.innerWidth}px,0px)`;
    else {
      this.HTMLelementTag.style.transform = `translate(-${window.innerWidth}px,0px)`;
    }
  };
}

// export default Bullet;
