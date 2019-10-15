class Enemy extends GameObject {
  /**
   * @param {string} id
   * @param {EnemyType} type
   *
   */
  lastRocketId = 1;

  constructor(id, element, type) {
    // TODO: Pass health to super class
    super(100, element);
    this.id = id;
    this.type = type;
  }

  move = () => {
    this.element.getBoundingClientRect();
    const startPoint = 1180;
    this.element.style.transition = `transform ${startPoint / 290.5}s linear`;
    this.element.style.transform = `translate(-${2000}px, 0px)`;
  };

  fire = () => {
    const bulletImg = document.createElement('img');
    bulletImg.id = `Er${this.id}${this.lastRocketId}`;
    bulletImg.setAttribute('src', './assets/rversedrocket.png');
    bulletImg.style.position = 'fixed';
    bulletImg.style.top = `${parseInt(this.element.style.top.slice(0, -2)) + this.element.style.height / 2 + 40}px`;
    bulletImg.style.left = `${this.element.getBoundingClientRect().left - 40}px`;

    const bullet = new Bullet(bulletImg.id, 15, Creator.enemy, bulletImg);
    document.getElementById('play-area').appendChild(bullet.element);
    this.lastRocketId++;
    Observer.enemiesBullets.push(bullet);
    bullet.move();
  };
}
