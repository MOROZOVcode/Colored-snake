const boardNode = document.querySelector('#board');

const screenWidth = window.screen.width;
let SQUARES_QUANTITY;

if (screenWidth > 500) {
  SQUARES_QUANTITY = 400;
} else {
  SQUARES_QUANTITY = 357;
}

for (let i = 0; i < SQUARES_QUANTITY; i++) {
  const squareNode = document.createElement('div');
  const coreNode = document.createElement('div');

  squareNode.classList.add('square');
  coreNode.classList.add('core');

  squareNode.append(coreNode);

  if (screenWidth > 500) {
    squareNode.addEventListener('mouseover', () => setColor(coreNode));
    squareNode.addEventListener('mouseleave', () => removeColor(coreNode));
  } else {
    coreNode.style.transition = '0s';
    squareNode.addEventListener('touchstart', (event) => {
      itemMove(event);
    });

    squareNode.addEventListener('touchmove', itemMove);
  }

  boardNode.append(squareNode);
}

let squaresNode = document.querySelectorAll('.square');

function itemMove(event) {
  event.preventDefault();
  let touch = event.targetTouches[0];
  let touchX = touch.pageX;
  let touchY = touch.pageY;

  squaresNode.forEach((square) => {
    const core = square.children[0];
    if (
      touchY < square.getBoundingClientRect().bottom &&
      touchX > square.getBoundingClientRect().left &&
      touchY > square.getBoundingClientRect().top &&
      touchX < square.getBoundingClientRect().right
    ) {
      if (!core.style.backgroundColor) {
        setColor(core);
      }
    }
  });
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}
