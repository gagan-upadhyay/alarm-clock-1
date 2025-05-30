// live clock
function updateClock() {
  const hours = String(new Date().getHours()).padStart(2,'0');
  const minutes = String(new Date().getMinutes()).padStart(2,'0');
  const seconds = String(new Date().getSeconds()).padStart(2,'0');
  console.log(` Time is: ${hours}:${minutes}:${seconds}`);
    let timeElement = document.getElementById("clock");

  timeElement.innerHTML=`${hours}:${minutes}:${seconds}`
}

// take alarm input
function addAlarm(){
  document.getElementById("alarmInput").style.display = "inline";
  document.getElementById("submitAlarm").style.display = "inline";
}

// stack alarms
function timeStorage(){
  const value = document.getElementById("alarmInput").value;
for(let i = 1; i <= 4; i++){
    const alarm = document.getElementById(`a${i}`)
    if(alarm.innerText === `ALARM ${i}`){
      alarm.innerText = value + ":00"
      break;
    }
}


  document.getElementById("alarmInput").style.display = "none"; 
  document.getElementById("submitAlarm").style.display = "none";
}

const setAlarm = document.getElementById("setAlarm")
setAlarm.addEventListener("click", addAlarm)

const confirmAlarm = document.getElementById("submitAlarm");
confirmAlarm.addEventListener("click", timeStorage)



const del1 = document.getElementById('del1')
const del2 = document.getElementById('del2')
const del3 = document.getElementById('del3')
const del4 = document.getElementById('del4')

del1.addEventListener("click", function(){
  document.getElementById("a1").innerText = "ALARM 1";
})
del2.addEventListener("click", function(){
  document.getElementById("a1").innerText = "ALARM 2";
})
del3.addEventListener("click", function(){
  document.getElementById("a1").innerText = "ALARM 3";
})
del4.addEventListener("click", function(){
  document.getElementById("a1").innerText = "ALARM 4";
})


updateClock()
setInterval(updateClock, 0);



