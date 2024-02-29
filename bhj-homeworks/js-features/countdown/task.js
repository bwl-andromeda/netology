const timer = document.getElementById("timer");
setInterval(() => {
 if (Number(timer.textContent) > 0) {
  timer.textContent = Number(timer.textContent) - 1;
 } else if (Number(timer.textContent) === 0) {
  alert("Вы победили! :)")
 }
 }, 1000);