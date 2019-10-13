const enemy = document.getElementById('en');
/*let rect = enemy.getBoundingClientRect();
let EnemyPostion = rect.left;
function move() {
  if (EnemyPostion > 10) {
    EnemyPostion -= 20;
    rect = enemy.getBoundingClientRect();
    enemy.style.left = EnemyPostion;
   // enemy.style = `position:absolute; left:${EnemyPostion}px; top:20px;`;
    console.log(rect);
  } else {
    rect = enemy.getBoundingClientRect();
    console.log(rect);
    clearEnemy();
  }
}
const enemyMoveInterval = setInterval(move, 300);

function clearEnemy() {
  clearInterval(enemyMoveInterval);
}
function createEnemy() {
  const newEnemy = new Image(150, 51.96875);
  newEnemy.src = '../images/EnemyPlane1.png';
  const newEnemyYaxis = Math.floor(Math.random() * window.innerHeight + 10);
  newEnemy.style = `position:absolute; right:10px; top:${newEnemyYaxis}px;`;
  document.getElementById('container').appendChild(newEnemy);
}

const enemyCreateInerval = setInterval(createEnemy, 1500);*/


function move(){
  enemy.style.transition = "transform 6s linear";
enemy.style.transform = "translate(-1700px, 0px)";
}
function enemyPosition(){
  let rect = enemy.getBoundingClientRect();
  var enemyPosition =rect.left; 
  console.log(enemyPosition);

}

const EnemyPostion = setInterval(enemyPosition, 100);

function clearEnemy() {
  clearInterval(EnemyPostion);
}