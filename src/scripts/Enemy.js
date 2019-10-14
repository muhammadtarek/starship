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
    
    var ObjectCurrentPosition = 1180;
    console.log(ObjectCurrentPosition);
    
    //console.log(ObjectCurrentPosition/290.5);
    //console.log(window.innerWidth-(window.innerWidth-rect.left));
    this.HTMLelementTag.style.transition = `transform ${ObjectCurrentPosition/290.5}s linear`;
    this.HTMLelementTag.style.transform = `translate(-${2000}px, 0px)`;
  }

  fire = () => {
    let bulletImg = document.createElement('img');
    bulletImg.setAttribute("src","../assets/rocket1.png");

    let bullet = new bullet()
  }
}
//export default Enemy;

//export default Enemy;
