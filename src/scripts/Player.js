// @ts-check
// import GameObject from './GameObject';

class Player extends GameObject {
  /**
   * @param {string} name
   */
  constructor(name) {
    super(100);
    this.playerSpeed = 30;
    this.playerElement = null;
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
      default:
        break;
    }
  }



}

// export default Player;
