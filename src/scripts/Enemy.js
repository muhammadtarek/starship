// @ts-check
//import GameObject from './GameObject';

class Enemy extends GameObject {
  /**
   * @param {string} id
   * @param {EnemyType} type
   *
   */
  constructor(id, HTMLelementTag, type) {
    // TODO: Pass health to super class
    super(100, HTMLelementTag);
    this.id = id;
    this.type = type;

  }

  move = () => {
    //console.log("sdasedasdasdas" + this.id);
    let EnemyRect = this.HTMLelementTag.getBoundingClientRect();
    var ObjectCurrentPosition = EnemyRect.left;
    //console.log(ObjectCurrentPosition/290.5);
    //console.log(window.innerWidth-(window.innerWidth-rect.left));
    this.HTMLelementTag.style.transition = `transform ${ObjectCurrentPosition/290.5}s linear`;
    this.HTMLelementTag.style.transform = `translate(-${window.innerWidth-(window.innerWidth-EnemyRect.left)+200}px, 0px)`;
  }
}
//export default Enemy;

//export default Enemy;
