// @ts-check
import GameObject from './GameObject';

class Player extends GameObject {
  /**
   * @param {string} name
   */
  constructor(name) {
    super(100);

    this.name = name;
  }
}

export default Player;
