const deadCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");
const holes = document.querySelectorAll(".hole");

let score = 0;
let misses = 0;

function handleClick() {
  if (this.classList.contains("hole_has-mole")) {
    score++;
    deadCount.textContent = score;
    if (Number(deadCount.textContent >= 10)) {
      alert('Победа!');
      score = 0;
      misses = 0;
      deadCount.textContent = score;
      lostCount.textContent = misses;
    }
  } else if (!this.classList.contains("hole_has-mole")){
    misses++;
    lostCount.textContent = misses;
    if (Number(lostCount.textContent >= 5)) {
      alert('Проигрыш!');
      misses = 0;
      score = 0;
      deadCount.textContent = score;
      lostCount.textContent = misses;
    }
  }
}

holes.forEach((hole) => {
  hole.addEventListener("click", handleClick);
  this.removeEventListener("click", handleClick);
});