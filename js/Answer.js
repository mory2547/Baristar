let imgList = 
[
'img/Question/19곰 테드.jpg', 'img/Question/그것.jpg', 'img/Question/300.jpg', 
'img/Question/관상.jpg', 'img/Question/너의 이름은.jpg', 'img/Question/살인의 추억.jpg',
'img/Question/매드맥스.jpg', 'img/Question/맨인블랙.jpg', 'img/Question/신세계.jpg', 
'img/Question/어바웃 타임.jpg', 'img/Question/완벽한 타인.jpg', 'img/Question/콘스탄틴.jpg',
'img/Question/월터의 상상은 현실이 된다.jpg', 'img/Question/트루먼 쇼.jpg',
'img/Question/위대한 개츠비.jpg', 'img/Question/인셉션.jpg', 'img/Question/전우치.jpg', 'img/Question/인터스텔라.jpg', 'img/Question/존 윅.jpg','img/Question/청년경찰.jpg', 
'img/Question/조커.jpg', 'img/Question/테이큰.jpg', 'img/Question/아저씨.jpg', 
'img/Question/R.I.P.D.jpg'
];
let answerList0 = ['19곰 테드', '1', '2', '3', '4', '5'];
let answerList1 = ['그것', '1', '2', '3', '4', '5'];
let answerList2 = ['300', '1', '2', '3', '4', '5'];
let answerList3 = ['관상', '1', '2', '3', '4', '5'];
let answerList4 = ['너의 이름은', '1', '2', '3', '4', '5'];
let answerList5 = ['살인의 추억', '1', '2', '3', '4', '5'];
let answerList6 = ['매드맥스', '1', '2', '3', '4', '5'];
let answerList7 = ['맨인블랙', '1', '2', '3', '4', '5'];
let answerList8 = ['신세계', '1', '2', '3', '4', '5'];
let answerList9 = ['어바웃 타임', '1', '2', '3', '4', '5'];
let answerList10 = ['완벽한 타인', '1', '2', '3', '4', '5'];
let answerList11 = ['콘스탄틴', '1', '2', '3', '4', '5'];
let answerList12 = ['월터의 상상은 현실이 된다', '1', '2', '3', '4', '5'];
let answerList13 = ['트루먼 쇼', '1', '2', '3', '4', '5'];
let answerList14 = ['위대한 개츠비', '1', '2', '3', '4', '5'];
let answerList15 = ['인셉션', '1', '2', '3', '4', '5'];
let answerList16 = ['전우치', '1', '2', '3', '4', '5'];
let answerList17 = ['인터스텔라', '1', '2', '3', '4', '5'];
let answerList18 = ['존 윅', '1', '2', '3', '4', '5'];
let answerList19 = ['청년경찰', '1', '2', '3', '4', '5'];
let answerList20 = ['조커', '1', '2', '3', '4', '5'];
let answerList21 = ['테이큰', '1', '2', '3', '4', '5'];
let answerList22 = ['아저씨', '1', '2', '3', '4', '5'];
let answerList23 = ['R.I.P.D', '1', '2', '3', '4', '5'];

const answerBtn = document.querySelectorAll('.item');
const answerBtn1 = document.getElementsByClassName('item')[0];
const answerBtn2 = document.getElementsByClassName('item')[1];
const answerBtn3 = document.getElementsByClassName('item')[2];
const answerBtn4 = document.getElementsByClassName('item')[3];
const wait = document.getElementById('Wait');
const finish = document.querySelector('#Finish');
const round = document.querySelector('.Round');
const question = document.querySelector('#Question');

function randomValue(array) {
  const randomValue = Math.floor(Math.random() * array.length);
  return randomValue;
}

function randomAnswer(array, target) {
  const value = randomValue(array);
  target.innerText = array[value];
  array.splice(value, 1);
}

function randomQuestion(array, target) {
  const value = randomValue(array);
  target.src = array[value];
  array.splice(value, 1);
}

randomQuestion(imgList, question);

function lastAnswer(array, target) {
  if(answerBtn1.innerText, answerBtn2.innerText, answerBtn3.innerText === array[0]) {
    randomAnswer(array, target);
  }  else {
    target.innerText = array[0];
  }
}

randomAnswer(answerList0, answerBtn1);
randomAnswer(answerList0, answerBtn2);
randomAnswer(answerList0, answerBtn3);
lastAnswer(answerList0, answerBtn4);

function startTimer() {
  second = 20;
  setTimeout('countDowun()', 2000);
  setTimeout('Time.innerText = 20', 2000);
}

function finishWait(img) {
  wait.style.visibility = 'hidden';
  round.innerText = 'Round ' + count;
  randomQuestion(img, question);
}

let count = 1;
function countTimesCalled() {
    count += 1;
    return count
}

function clickAnswer() {
  if(count === 5) {
    wait.style.visibility = 'visible';
    finish.style.visibility = 'visible';
    clearInterval(time);
  } else {
    wait.style.visibility = 'visible';
    setTimeout('finishWait(imgList)', 2000);
    setTimeout('randomAnswer(answerList' + count + ', answerBtn1)', 2000);
    setTimeout('randomAnswer(answerList' + count + ', answerBtn2)', 2000);
    setTimeout('randomAnswer(answerList' + count + ', answerBtn3)', 2000);
    setTimeout('lastAnswer(answerList' + count + ', answerBtn4)', 2000);
    countTimesCalled();
    clearInterval(time);
    startTimer();
  }
}
// function nonClick() {
//   while(second == 0) {
//     alert("You don't click");
//     wait.style.visibility = 'visible';
//     setTimeout('finishWait(imgList)', 2000);
//     setTimeout('randomAnswer(answerList' + count + ', answerBtn1)', 2000);
//     setTimeout('randomAnswer(answerList' + count + ', answerBtn2)', 2000);
//     setTimeout('randomAnswer(answerList' + count + ', answerBtn3)', 2000);
//     setTimeout('lastAnswer(answerList' + count + ', answerBtn4)', 2000);
//     countTimesCalled();
//     clearInterval(time);
//     startTimer();
//   }
// }
answerBtn1.addEventListener('click', clickAnswer);
answerBtn2.addEventListener('click', clickAnswer);
answerBtn3.addEventListener('click', clickAnswer);
answerBtn4.addEventListener('click', clickAnswer);