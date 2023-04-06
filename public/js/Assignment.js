const temperatureSlider = document.getElementById("temperature-slider");
const temperatureDisplay = document.getElementById("temperature-display");

temperatureSlider.addEventListener("input", () => {
  temperatureDisplay.innerHTML = temperatureSlider.value + "&deg;C";
});

const notifications = document.getElementById("notifications");
const notificationsDisplay = document.getElementById("notifications-display");

notifications.addEventListener("change", () => {
  notificationsDisplay.innerHTML = "Notifications: " + notifications.options[notifications.selectedIndex].text;
});

const lightingMode = document.getElementById("lighting-mode");
const lightingModeDisplay = document.getElementById("lighting-mode-display");

lightingMode.addEventListener("change", () => {
  lightingModeDisplay.innerHTML = "Lighting Mode: " + lightingMode.options[lightingMode.selectedIndex].text;
});

const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-message");
const tempInput = document.getElementById("temperature-slider");
const TimerHours = document.getElementById("hours-input");
const TimerMinutes = document.getElementById("minutes-input");
const postalCode = document.getElementById("Postal_code");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const tempValue = tempInput.value;
  const HoursValue = TimerHours.value;
  const minutesValue = TimerMinutes.value;

  const tempDisplay = document.getElementById("temporary-temp");
  const initialTemp = document.getElementById("temperature-display").innerText;
  tempDisplay.innerHTML = `${tempValue}C`;

  const TimerDisplay = document.getElementById("temporary-time");
  const TimerTime = HoursValue * 3600 + minutesValue * 60;
  let Timeremaining = TimerTime;

  const TimerInterval = setInterval(() => {
    const hours = Math.floor(Timeremaining / 3600);
    const minutes = Math.floor((Timeremaining % 3600) / 60);
    const seconds = Timeremaining % 60;

    TimerDisplay.innerHTML =
      `${hours.toString().padStart(2, "0")}:
      ${minutes.toString().padStart(2, "0")}:
      ${seconds.toString().padStart(2, "0")}:
      `;

    if (Timeremaining === 0) {
      clearInterval(TimerInterval);
      TimerDisplay.innerHTML = "";
      tempDisplay.innerHTML = initialTemp;
    } else {
      Timeremaining--;
    }
  }, 1000);

  const regex = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;

  if (!regex.test(postalCode.value.trim())) {
    errorMessage.style.display = "block";
    return false;
  }
  return true;
});

const datetime = document.getElementById("datetime");

function updateDateTime() {
  const now = new Date();
  datetime.innerHTML = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

