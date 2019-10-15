let characterName;
let GameLevel;

// Defualt Setting
characterName = 'plane #1';
GameLevel = 'easy';

function setGameLevel(number) {
  GameLevel = number;

  buttonsInterface(number);
}

document.getElementById('easy').addEventListener(
  'click',
  function() {
    setGameLevel('easy');
  },
  false,
);

document.getElementById('medium').addEventListener(
  'click',
  function() {
    setGameLevel('medium');
  },
  false,
);

document.getElementById('hard').addEventListener(
  'click',
  function() {
    setGameLevel('hard');
  },
  false,
);

function setPlayerCharacter(character) {
  characterName = character;

  charactersInerface(character);
}

document.getElementById('cardOne').addEventListener(
  'click',
  function() {
    setPlayerCharacter('plane #1');
  },
  false,
);

document.getElementById('cardTwo').addEventListener(
  'click',
  function() {
    setPlayerCharacter('plane #2');
  },
  false,
);

document.getElementById('cardThree').addEventListener(
  'click',
  function() {
    setPlayerCharacter('plane #3');
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

function getPlayerCharacter() {
  return this.characterName;
}

function getGameLevel() {
  return this.GameLevel;
}
