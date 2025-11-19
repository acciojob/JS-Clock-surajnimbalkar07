function setClock() {
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDeg = seconds * 6;                     // 360 / 60
  const minutesDeg = minutes * 6 + seconds * 0.1;     // smooth movement
  const hoursDeg = (hours % 12) * 30 + minutes * 0.5; // smooth movement

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();
