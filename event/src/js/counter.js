export default class Counter {
  constructor() {
    this.clickWin = 0;
    this.clickLose = 0;
  }

  countPointsWins() {
    const clickWins = document.getElementById("wins");
    const clickLost = document.getElementById("lost");
    this.clickWin ++;
    clickWins.innerText = this.clickWin;
    if (this.clickWin === 10) {
      alert ("Вы победили!!!!!!!!111");
      this.clickWin = 0;
      this.clickLose = 0;
      clickWins.innerText = this.clickWin;
      clickLost.innerText = this.clickLose;
    } 
  }

  countPointsLose() {
    const clickWins = document.getElementById("wins");
    const clickLost = document.getElementById("lost");
    this.clickLose ++;
    clickLost.innerText = this.clickLose;
    if (this.clickLose === 5) {
      alert ("Вы проиграли! :(");
      this.clickWin = 0;
      this.clickLose = 0;
      clickWins.innerText = this.clickWin;
      clickLost.innerText = this.clickLose;
    }
  }

  countPass() {
    const clickWins = document.getElementById("wins");
    const clickLost = document.getElementById("lost");
    this.clickWin = 0;
    this.clickLose = 0;
    alert ("НЕ СПАТЬ! Вы проиграли! :(");
    clickWins.innerText = this.clickWin;
    clickLost.innerText = this.clickLose;
    return;
  }
}
