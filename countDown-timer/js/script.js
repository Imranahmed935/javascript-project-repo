const time = "10 march 2025 11:59 pm";
const staticTime = document.getElementById("time");
staticTime.innerText = time;

const input = document.querySelectorAll("input");

const clock = () => {
  const endTime = new Date(time);
  const nowTime = new Date();
  const diff = (endTime - nowTime) / 1000;
  if (diff < 0) return;
  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff % 60);
};
clock();
const timeOut = setInterval(() => {
  clock();
}, 1000);

const endTime = new Date(time);
const newTime = new Date();
const duration = endTime - newTime;

setTimeout(() => {
  clearInterval(timeOut);
  alert("The Offer has Expired!");
}, duration);
