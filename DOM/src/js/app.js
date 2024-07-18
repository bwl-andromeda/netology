class Game {
  constructor(size) {
    this.size = size ** 2;
  }

  createSize() {
    const cellSize = document.querySelector('.game-all');
    for (let i = 0; i < this.size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('game');
      cell.id = `hole-${i}`;
      cellSize.appendChild(cell);
    }
    this.random();
  }

  random() {
    setInterval(() => {
    const tagGame = document.querySelectorAll('.game');
      for (let i = 0; i < tagGame.length; i++) {
        const newTag = 'activGame';
        if (tagGame[i].classList.contains(newTag)) {
          tagGame[i].classList.remove(newTag);
        }
      }
    const randomNumber = Math.floor(Math.random() * this.size);
    tagGame[randomNumber].classList.add('activGame');
    }, 1000)
  }
}

const newGame = new Game(4);
newGame.createSize();
