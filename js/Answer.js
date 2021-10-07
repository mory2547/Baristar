let imgList = [
  "img/Question/19곰 테드.jpg",
  "img/Question/그것.jpg",
  "img/Question/300.jpg",
  "img/Question/관상.jpg",
  "img/Question/너의 이름은.jpg",
  "img/Question/살인의 추억.jpg",
  "img/Question/매드맥스.jpg",
  "img/Question/맨인블랙.jpg",
  "img/Question/신세계.jpg",
  "img/Question/어바웃 타임.jpg",
  "img/Question/완벽한 타인.jpg",
  "img/Question/콘스탄틴.jpg",
  "img/Question/월터의 상상은 현실이 된다.jpg",
  "img/Question/트루먼 쇼.jpg",
  "img/Question/위대한 개츠비.jpg",
  "img/Question/인셉션.jpg",
  "img/Question/전우치.jpg",
  "img/Question/인터스텔라.jpg",
  "img/Question/존 윅.jpg",
  "img/Question/청년경찰.jpg",
  "img/Question/조커.jpg",
  "img/Question/테이큰.jpg",
  "img/Question/아저씨.jpg",
  "img/Question/R.I.P.D.jpg",
  "img/Question/미드나잇 선.jpg",
  "img/Question/라라랜드.jpg",
];
let answerList = [
  [
    { right: "19곰 테드" },
    "레버넌트 죽음에서 돌아온 자",
    "브라더 베어",
    "곰돌이 푸",
  ],
  [
    { right: "그것" },
    "조커",
    "광대:소리꾼",
    "쏘우",
    "더 퍼지",
    "다크나이트 라이즈",
  ],
  [{ right: "300" }, "레슬러", "글래디에이터", "타이탄의 분노", "킹 아더"],
  [{ right: "관상" }, "광해", "명량", "사도", "왕의남자"],
  [
    { right: "너의 이름은" },
    "날씨의 아이",
    "울고싶은 나는 고양이 가면을 쓴다",
    "목소리의 형태",
    "시간을 달리는 소녀",
  ],
  [
    { right: "살인의 추억" },
    "살인자의 기억법",
    "악인전",
    "범죄도시",
    "성난황소",
  ],
  [
    { right: "매드맥스" },
    "양들의 침묵",
    "다크나이트 라이즈",
    "덩케르크",
    "레전드",
  ],
  [
    { right: "맨인블랙" },
    "R.I.P.D",
    "디스트릭트 9",
    "신세계",
    "터미네이터",
    "신세계",
  ],
  [
    { right: "신세계" },
    "독전",
    "범죄와의 전쟁",
    "아수라",
    "올드보이",
    "아저씨",
  ],
  [
    { right: "어바웃 타임" },
    "코리아",
    "비긴어게인",
    "뜻밖의 룸메이트",
    "싸이킥",
    "분노의 핑퐁",
  ],
  [{ right: "완벽한 타인" }, "나의 PS파트너", "착신아리", "기생충"],
  [{ right: "콘스탄틴" }, "존윅", "매트릭스", "닥터스트레인지"],
  [
    { right: "월터의 상상은 현실이 된다" },
    "괜찮아요, 미스터 브랜드",
    "위아영",
    "박물관이 살아있다",
    "행복을 찾아서",
    "박물관이 살아있다 2",
  ],
  [
    { right: "트루먼 쇼" },
    "행복을 찾아서",
    "브루스 올마이티",
    "노아",
    "에반 올마이티",
  ],
  [
    { right: "위대한 개츠비" },
    "더 울프 오브 월 스트리트",
    "타이타닉",
    "미 비포 유",
    "더킹",
  ],
  [
    { right: "인셉션" },
    "테넷",
    "스파이더맨 파프롬 홈",
    "셔터 아일랜드",
    "타이타닉",
  ],
  [
    { right: "전우치" },
    "찰리와 초콜릿 공장",
    "하울의 움직이는 성",
    "셜록홈즈",
    "조선명탐정",
  ],
  [{ right: "인터스텔라" }, "마션", "그래비티", "엣지오브 투모로우"],
  [{ right: "존 윅" }, "매트릭스", "콘스탄틴", "스피드", "아저씨"],
  [{ right: "청년경찰" }, "스물", "좋아해줘", "미생", "엑시트"],
  [
    { right: "조커" },
    "다크나이트",
    "그것",
    "다크나이트 라이즈",
    "배트맨 비긴즈",
  ],
  [{ right: "테이큰" }, "아저씨", "분노의 질주", "인천상륙작전"],
  [{ right: "아저씨" }, "마더", "토요일 오후 2시", "태극기 휘날리며", "고지전"],
  [{ right: "R.I.P.D" }, "세이프", "분노의 핑퐁", "킹스맨:골든서클"],
  [
    { right: "미드나잇 선" },
    "비긴어게인",
    "안녕 베일리",
    "원스",
    "티파니에서 아침을",
  ],
  [{ right: "라라랜드" }, "캣츠", "위대한 쇼맨", "맘마미아!", "스텝업"],
];

const answerBtn = document.querySelectorAll(".item");
const answerBtn0 = document.getElementsByClassName("item")[0];
const answerBtn1 = document.getElementsByClassName("item")[1];
const answerBtn2 = document.getElementsByClassName("item")[2];
const answerBtn3 = document.getElementsByClassName("item")[3];
const wait = document.getElementById("Wait");
const finish = document.querySelector("#Finish");
const round = document.querySelector(".Round");
const question = document.querySelector("#Question");

function randomValue(array) {
  const randomValue = Math.floor(Math.random() * array.length);
  return randomValue;
}

function randomQuestion(array, target) {
  value = randomValue(array);
  target.src = array[value];
  array.splice(value, 1);
}

randomQuestion(imgList, question);

function randomAnswer(target) {
  const answerValue = randomValue(answerList[value]);
  if (typeof answerList[value][answerValue] == "object") {
    target.innerText = answerList[value][answerValue].right;
    target.className = "right_item";
  } else {
    target.innerText = answerList[value][answerValue];
  }
  answerList[value].splice(answerValue, 1);
}

function lastAnswer(target) {
  if (typeof answerList[value][0] == "object") {
    target.innerText = answerList[value][0].right;
    target.className = "right_item";
    answerList.splice(value, 1);
  } else {
    randomAnswer(target);
    answerList.splice(value, 1);
  }
}

randomAnswer(answerBtn0);
randomAnswer(answerBtn1);
randomAnswer(answerBtn2);
lastAnswer(answerBtn3);

function startTimer() {
  second = 20;
  setTimeout("countDowun()", 2000);
  setTimeout("Time.innerText = 20", 2000);
}

function finishWait() {
  wait.style.visibility = "hidden";
  round.innerText = "Round " + count;
  randomQuestion(imgList, question);
  randomAnswer(answerBtn0);
  randomAnswer(answerBtn1);
  randomAnswer(answerBtn2);
  lastAnswer(answerBtn3);
}

let count = 1;
function countTimesCalled() {
  count += 1;
  return count;
}

function clickAnswer() {
  if (count === 5) {
    wait.style.visibility = "visible";
    finish.style.visibility = "visible";
    clearInterval(time);
  } else {
    wait.style.visibility = "visible";
    countTimesCalled();
    setTimeout("finishWait()", 2000);
    clearInterval(time);
    startTimer();
    answerBtn0.className = "item";
    answerBtn1.className = "item";
    answerBtn2.className = "item";
    answerBtn3.className = "item";
  }
}
answerBtn0.addEventListener("click", clickAnswer);
answerBtn1.addEventListener("click", clickAnswer);
answerBtn2.addEventListener("click", clickAnswer);
answerBtn3.addEventListener("click", clickAnswer);
