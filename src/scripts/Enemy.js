class Enemy extends GameObject {
  /**
   * @param {string} id
   * @param {EnemyType} type
   *
   */
  enemyRocketsID = 1;

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

    //console.log(ObjectCurrentPosition/290.5);
    //console.log(window.innerWidth-(window.innerWidth-rect.left));
    this.HTMLelementTag.style.transition = `transform ${ObjectCurrentPosition/290.5}s linear`;
    this.HTMLelementTag.style.transform = `translate(-${2000}px, 0px)`;
  }

  fire = () => {
    let bulletImg = document.createElement('img');

    bulletImg.id = 'Er' + this.id + this.enemyRocketsID;

    bulletImg.setAttribute("src", "./assets/rversedrocket.png");
    bulletImg.style.position = 'fixed';
    //get enemy position
    bulletImg.style.top = parseInt(this.HTMLelementTag.style.top.slice(0, -2)) + (this.HTMLelementTag.style.height / 2) + 40 + 'px';
    bulletImg.style.left = (this.HTMLelementTag.getBoundingClientRect().left) - 40 + 'px';
    // console.log(` top : ${this.HTMLelementTag.style.top}`);
    // console.log(` left : ${this.HTMLelementTag.style.left}`);
    let bullet = new Bullet(bulletImg.id, 100, 'enemy', bulletImg);
    document.getElementById("play-area").appendChild(bullet.HTMLelementTag);
    console.log(this.enemyRocketsID);
    
    Observer.enemiesBullets.push(bullet);
    bullet.move();

  }
}