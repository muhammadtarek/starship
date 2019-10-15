/*
let characterName;
let GameLevel;
*/

class gameConfigriation {
  static characterName;
  static GameLevel = 'easy';

  static setPlayerCharacter = (character) => {
    characterName = character;
  } 

  static setGameLevel = (level) => {
    GameLevel = level;
  }
}

/*
function setGameLevel(number) {
  GameLevel = number;

  buttonsInterface(number);
}
*/


document.getElementById('easy').addEventListener(
  'click',
  function() {
    gameConfigriation.setGameLevel('easy');
  },
  false,
);

document.getElementById('medium').addEventListener(
  'click',
  function() {
    gameConfigriation.setGameLevel('medium');
  },
  false,
);

document.getElementById('hard').addEventListener(
  'click',
  function() {
    gameConfigriation.setGameLevel('hard');
  },
  false,
);



/*
function setPlayerCharacter(character) {
  characterName = character;

  charactersInerface(character);
}
*/

document.getElementById('cardOne').addEventListener(
  'click',
  function() {
    gameConfigriation.setPlayerCharacter('Plane1.png');
  },
  false,
);

document.getElementById('cardTwo').addEventListener(
  'click',
  function() {
    gameConfigriation.setPlayerCharacter('Plane2.png');
  },
  false,
);

document.getElementById('cardThree').addEventListener(
  'click',
  function() {
    gameConfigriation.setPlayerCharacter('Plane3.png');
  },
  false,
);

// Manipulate cards interface after character selection
function charactersInerface(characterSelected) {
  // Restore defualt
  document.getElementById('card #1').style.transform = 'scale(1)';
  document.getElementById('card #2').style.transform = 'scale(1)';
  document.getElementById('card #3').style.transform = 'scale(1)';

  document.getElementById('cardOne').style.color = 'white';
  document.getElementById('cardTwo').style.color = 'white';
  document.getElementById('cardThree').style.color = 'white';

  switch (characterSelected) {
    case 'plane #1':
      document.getElementById('card #1').style.transform = 'scale(1.1)';
      document.getElementById('cardOne').style.color = 'cyan';
      break;

    case 'plane #2':
      document.getElementById('card #2').style.transform = 'scale(1.1)';
      document.getElementById('cardTwo').style.color = 'cyan';

      break;

    case 'plane #3':
      document.getElementById('card #3').style.transform = 'scale(1.1)';
      document.getElementById('cardThree').style.color = 'cyan';

      break;

    default:
      break;
  }
}

function buttonsInterface(levelSelected) {
  // Restore defualt
  document.getElementById('easy').style.backgroundColor = 'rgb(255, 255, 0, 0.1)';
  document.getElementById('medium').style.backgroundColor = 'rgba(255, 166, 0, 0.3)';
  document.getElementById('hard').style.backgroundColor = 'rgb(255, 0, 0, 0.4)';

  switch (levelSelected) {
    case 'easy':
      document.getElementById('easy').style.backgroundColor = 'rgba(255, 255, 0, 0.6)';
      break;

    case 'medium':
      document.getElementById('medium').style.backgroundColor = 'rgba(255, 166, 0, 0.8)';
      break;

    case 'hard':
      document.getElementById('hard').style.backgroundColor = 'rgb(255, 0, 0.6)';
      break;

    default:
      break;
  }
}

 

