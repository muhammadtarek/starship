class Player extends GameObject {
  /**
   * @param {string} name
   */
  name = '';

  /**
   * @param {number} plyerRocketsID
   */
  plyerRocketsID = 1;

  constructor(name, element) {
    super(100);
    this.playerSpeed = 30;
    this.playerElement = element;
    this.name = name;
  }

  // move function for Player
  move = eventCode => {
    function printMousePos(event) {
      console.log('clientX: ', event.clientX, ' - clientY: ', event.clientY);
    }
    document.addEventListener('click', printMousePos);
    switch (eventCode) {
      case 38:
        if (parseInt(this.playerElement.style.top.slice(0, -2)) >= 90) {
          this.playerElement.style.top = `${parseInt(this.playerElement.style.top.slice(0, -2)) - this.playerSpeed}px`;
        }
        break;
      case 40:
        if (parseInt(this.playerElement.style.top.slice(0, -2)) + this.playerElement.height <= window.innerHeight) {
          this.playerElement.style.top = `${parseInt(this.playerElement.style.top.slice(0, -2)) + this.playerSpeed}px`;
        }
        break;
      case 32:
        this.fire();
        break;
      default:
        break;
    }
  };

  fire = () => {
    const rocketElement = document.createElement('img');
    rocketElement.setAttribute('src', './src/assets/rocket1.png');
    rocketElement.id = `Pr${this.plyerRocketsID}`;
    rocketElement.style.position = 'fixed';
    rocketElement.style.top = `${parseInt(this.playerElement.style.top.slice(0, -2)) +
      this.playerElement.height / 2}px`;
    rocketElement.style.left = `${this.playerElement.width - 10}px`;

    const bullet = new Bullet(rocketElement.id, 100, Creator.player, rocketElement);
    document.getElementById('play-area').appendChild(bullet.element);
    this.plyerRocketsID++;
    Observer.addBullet(bullet);
    bullet.move();
  };
}
