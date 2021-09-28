const Time = document.querySelector('#Timer');
let second = 20;

function seconds() {
  second = second - 1;
  Time.innerText = second;
  if(second === 0) {
    clearInterval(time);
  }
}

function countDowun() {
  time = setInterval('seconds()', 1000);
}
countDowun();