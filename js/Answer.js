let answerList = ['답', 'b', 'c', 'd', 'e', 'f'];
let answerList2 = ['답', '1', '2', '3', '4', '5'];
const answerBtn = document.querySelectorAll('.item');
const answerBtn1 = document.getElementsByClassName('item')[0];
const answerBtn2 = document.getElementsByClassName('item')[1];
const answerBtn3 = document.getElementsByClassName('item')[2];
const answerBtn4 = document.getElementsByClassName('item')[3];
const wait = document.getElementById('Wait');
const round = document.querySelector('.Round');
const question = document.querySelector('#Question');

function randomAnswer(array, target) {
  const randomValue = Math.floor(Math.random() * array.length);
  target.innerText = array[randomValue];
  array.splice(randomValue, 1);
}

function lastAnswer(array, target) {
  if(answerBtn1.innerText, answerBtn2.innerText, answerBtn3.innerText === array[0]) {
    randomAnswer(array, target);
  }  else {
    target.innerText = array[0];
  }
}

randomAnswer(answerList, answerBtn1);
randomAnswer(answerList, answerBtn2);
randomAnswer(answerList, answerBtn3);
lastAnswer(answerList, answerBtn4);

function stopTimer() {
  clearInterval(time);
  second = 20;
  setTimeout('countDowun()', 2000);
  setTimeout('Time.innerText = 20', 2000);
};
answerBtn1.addEventListener('click', stopTimer);
answerBtn2.addEventListener('click', stopTimer);
answerBtn3.addEventListener('click', stopTimer);
answerBtn4.addEventListener('click', stopTimer);

function finishWait() {
  let i = 2;
  wait.style.visibility = 'hidden';
  round.innerText = 'Round ' + i++;
  question.src = 'img/완벽한 타인, 콘스탄틴.jpg';
}

function clickAnswer() {
  wait.style.visibility = 'visible';
  setTimeout('finishWait()', 2000);
  setTimeout('randomAnswer(answerList2, answerBtn1)', 2000);
  setTimeout('randomAnswer(answerList2, answerBtn2)', 2000);
  setTimeout('randomAnswer(answerList2, answerBtn3)', 2000);
  setTimeout('lastAnswer(answerList2, answerBtn4)', 2000);
}
answerBtn1.addEventListener('click', clickAnswer);
answerBtn2.addEventListener('click', clickAnswer);
answerBtn3.addEventListener('click', clickAnswer);
answerBtn4.addEventListener('click', clickAnswer);