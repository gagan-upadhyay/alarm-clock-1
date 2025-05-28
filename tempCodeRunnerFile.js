
let liveTime = ``;

  setInterval(function () {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    const liveTime = `${hours}:${minutes}:${seconds}`;
    console.log(liveTime);
    document.getElementById('clock').innerHTML = liveTime;
  }, 1000);

