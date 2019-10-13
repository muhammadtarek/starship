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
<<<<<<< HEAD
move = () =>{
  //console.log("sdasedasdasdas" + this.id);
  let rect = this.id.getBoundingClientRect();
  var ObjectCurrentPosition = rect.left;
 console.log(ObjectCurrentPosition/290.5);
 console.log(window.innerWidth-(window.innerWidth-rect.left));
 this.id.style.transition = `transform ${ObjectCurrentPosition/290.5}s linear`;
 this.id.style.transform = `translate(-${window.innerWidth-(window.innerWidth-rect.left)}px, 0px)`;
}
export default Enemy;
=======

//export default Enemy;
>>>>>>> 3b81d5c9c5e58f07560cdcd460623dc90c5914c4
