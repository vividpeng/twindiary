let clockTitle = document.querySelector(".status_clock");
let dateTitle = document.querySelector(".status_date");

function getNowTime() {
  let clock = new Date();
  let minutes = clock.getMinutes();
  let hours = clock.getHours();
  let seconds = clock.getSeconds();
  //mini if else 구문.``''""
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function getNowTime2() {
  let clockDate = new Date();
  let years = clockDate.getFullYear();
  let months = clockDate.getMonth() + 1;
  let date = clockDate.getDate();
  let day = clockDate.getDay();
  if (day == 0) {
    day = "일";
  } else if (day == 1) {
    day = "월";
  } else if (day == 2) {
    day = "화";
  } else if (day == 3) {
    day = "수";
  } else if (day == 4) {
    day = "목";
  } else if (day == 5) {
    day = "금";
  } else {
    day = "토";
  }

  dateTitle.innerText = `${years}/${months < 10 ? `0${months}` : months}/${
    date < 10 ? `0${date}` : date
  } (${day})`;
}

function init() {
  getNowTime();
  getNowTime2();
  setInterval(getNowTime2, 1000);
  setInterval(getNowTime, 1000);
}

init();
