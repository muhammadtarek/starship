// @ts-check
// import GameObject from './GameObject';

class Player extends GameObject {
  /**
   * @param {string} name
   */
  plyerRocketsID = 1;
  constructor(name, HTMLelementTag) {
    super(100);
    this.playerSpeed = 30;
    this.playerElement = HTMLelementTag;
    this.name = name;
  }
  //move function for Player
  move = (eventCode) => {
    function printMousePos(event) {
      console.log(
        "clientX: ", event.clientX,
        " - clientY: ", event.clientY
      );
    }
    document.addEventListener("click", printMousePos);
    switch (eventCode) {
      case 38:
        if (parseInt(this.playerElement.style.top.slice(0, -2)) >= 90) {
          this.playerElement.style.top = parseInt(this.playerElement.style.top.slice(0, -2)) - this.playerSpeed + 'px';
        }
        break;
      case 40:
        if (parseInt(this.playerElement.style.top.slice(0, -2)) + this.playerElement.height <= window.innerHeight) {
          this.playerElement.style.top = parseInt(this.playerElement.style.top.slice(0, -2)) + this.playerSpeed + 'px';
        }
        break;
      case 32:
        this.fire();
        break;
      default:
        break;
    }
  }

  fire = () => {
    var Rocketimg = document.createElement("img");
    Rocketimg.setAttribute("src", "./assets/rocket1.png");
    Rocketimg.id = 'Pr' + this.plyerRocketsID;
    Rocketimg.style.position = 'fixed';
    Rocketimg.style.top = parseInt(this.playerElement.style.top.slice(0, -2)) + (this.playerElement.height / 2) + 'px';
    Rocketimg.style.left = this.playerElement.width - 10 + 'px';
    let PlayerBullet = new Bullet(Rocketimg.id, 100, 'player', Rocketimg);
    document.getElementById("play-area").appendChild(PlayerBullet.HTMLelementTag);
    this.plyerRocketsID++;
    Observer.addBullet(PlayerBullet);
    PlayerBullet.move();
  };
}

// export default Player;
