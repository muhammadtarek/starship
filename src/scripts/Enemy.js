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
    console.log(`Enemy ::  ${this.HTMLelementTag.id}`);
    
    let bulletImg = document.createElement('img');

    bulletImg.setAttribute("src","./assets/rocket1.png");
    bulletImg.setAttribute("filter", "FlipH");
    
    bulletImg.setAttribute("position", "fixed");
    bulletImg.className = "FlipImg";

    //get enemy position    
    bulletImg.style.top = parseInt(this.HTMLelementTag.style.top.slice(0, -2)) + parseInt(this.HTMLelementTag.style.height)/2 + 'px';
    bulletImg.style.top='500px';
    console.log(  bulletImg.style.top);

    bulletImg.style.left = parseInt(this.HTMLelementTag.style.width) - 10 + 'px';
    
    console.log(` top : ${this.HTMLelementTag.style.top}` );
    console.log(` left : ${this.HTMLelementTag.style.left}` );
    


    let bullet = new Bullet("b"+this.id, 100, 'enemy', bulletImg);

    document.getElementById("play-area").appendChild(bullet.HTMLelementTag);

    Observer.enemiesBullets.push(bullet);
  }
}


//export default Enemy;

//export default Enemy;
