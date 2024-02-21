const timer = document.querySelector(".timer");

const setTime = function () {
  let now = new Date();
  let mon = now.getMonth() + 1;
  console.log(mon);
  let day = now.getDate();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  console.log(hour, min, sec);
  timer.textContent = `${mon} 月 ${day} 日 ${hour} 點 ${min} 分 ${sec} 秒`;
};

setInterval(setTime, 1000);
