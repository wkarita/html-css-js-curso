const secondsHand = document.querySelector(".hand.seconds");
const minutesHand = document.querySelector(".hand.minutes");
const hoursHand = document.querySelector(".hand.hours");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const dateValue = document.getElementById("date");
  dateValue.innerHTML = currentDate.getDate();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setInterval(() => {
  setClock();
}, 900);
