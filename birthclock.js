let birthTitle = document.querySelector("#d_day");

function getBirthTime() {
  let nowDate = new Date();
  let birthDate = new Date("may 4,2020"); //건강이 날짜
  let gap = birthDate.getTime() - nowDate.getTime();
  gap = Math.floor(gap / (1000 * 60 * 60 * 24));
  birthTitle.innerText = `${gap}일`;
}

function init() {
  getBirthTime();
  setInterval(getNowTime, 10000);
}

init();
