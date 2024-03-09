const time = "9 march 2024 11:40 pm";
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
setInterval(() => {
  clock();
}, 1000);
