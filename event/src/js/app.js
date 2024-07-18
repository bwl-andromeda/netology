import Counter from "./counter";


export default class Game {
  constructor(size, counter) {
    this.size = size ** 2;
    this.counter = counter;
    this.count = 0;
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
    this.has();
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
        this.count += 1;

        if (this.count === 5) {
          this.counter.countPass();
          this.count = 0;
        }
    }, 1000)
  }

  has() {
    const tagGame = document.querySelectorAll('.game');
    tagGame.forEach((index) => {
      index.addEventListener("click", () => {
        if (index.classList.contains('activGame')) {
          this.counter.countPointsWins();
          this.count = 0;
        } else {
          this.counter.countPointsLose();
          this.count = 0;
        }
      })
    });
  }
}

const counter = new Counter();
const newGame = new Game(4, counter);
newGame.createSize();
