const score = document.querySelector(".Score");

let scoreCount = 0;

function clickRightAnswer() {
  scoreCount += 1;
  score.innerText = "Score: " + scoreCount;
}
