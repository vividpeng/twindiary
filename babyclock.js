let pregTitle = document.querySelector(".preg_day");

function getpregTime() {
  let nowDate = new Date();
  let pregDate = new Date("august 19,2019"); //건강이 날짜
  let gap = nowDate.getTime() - pregDate.getTime();
  gap = Math.floor(gap / (1000 * 60 * 60 * 24));
  let gapMonth = Math.floor(gap / 28) + 1;
  let gapWeek = Math.floor(gap / 7);
  let gapday = gap - gapWeek * 7;

  pregTitle.innerText = `${gap}일째, ${gapMonth}개월차 (${gapWeek}주${gapday}일)`;
}

function init() {
  getpregTime();
  setInterval(getNowTime, 10000);
}

init();
