// live clock
function updateClock() {
  const hours = String(new Date().getHours()).padStart(2,'0');
  const minutes = String(new Date().getMinutes()).padStart(2,'0');
  const seconds = String(new Date().getSeconds()).padStart(2,'0');
  console.log(` Time is: ${hours}:${minutes}:${seconds}`);
    let timeElement = document.getElementById("clock");

  timeElement.innerHTML=`${hours}:${minutes}:${seconds}`
  // checks if alarmTime == Time
  for(let i = 1; i <= 4; i++){
    const alarm = document.getElementById("a" + i)
    if(alarm.innerText == timeElement.innerText){
      alert('Alert! The time is ' + timeElement.innerText)
      const update = document.getElementById("a" + i);
      update.innerText = "ALARM " + i;
    }
  }
}

// take alarm input
function addAlarm(){
  document.getElementById("alarmInput").style.display = "inline";
  document.getElementById("submitAlarm").style.display = "inline";
}

// submit alarms
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
  document.getElementById("updateAlarm").style.display = "none";
}

const setAlarm = document.getElementById("setAlarm")
setAlarm.addEventListener("click", addAlarm)

const confirmAlarm = document.getElementById("submitAlarm");
confirmAlarm.addEventListener("click", timeStorage)

//update
let currentAlarm = null;

const update1 = document.getElementById("update1")
const update2 = document.getElementById("update2")
const update3 = document.getElementById("update3")
const update4 = document.getElementById("update4")

update1.addEventListener("click", function(){
  currentAlarm = document.getElementById("a1")
  showUpdateInput(currentAlarm, 1)
})

update2.addEventListener("click", function(){
  currentAlarm = document.getElementById("a2")
  showUpdateInput(currentAlarm, 2)
})

update3.addEventListener("click", function(){
  currentAlarm = document.getElementById("a3")
  showUpdateInput(currentAlarm, 3)
})

update4.addEventListener("click", function(){
  currentAlarm = document.getElementById("a4")
  showUpdateInput(currentAlarm, 4)
})

function showUpdateInput(alarm, index){
  if (alarm.innerText !== `ALARM ${index}`){
    document.getElementById("alarmInput").style.display = "inline";
    document.getElementById("updateAlarm").style.display = "inline";
  }
}

const updateAlarm = document.getElementById("updateAlarm")
updateAlarm.addEventListener('click', function(){
  if(currentAlarm){
    const value = document.getElementById("alarmInput").value
    currentAlarm.innerText = value + ":00"
    currentAlarm = null;
  }
  document.getElementById("alarmInput").style.display = "none";
  document.getElementById("updateAlarm").style.display = "none";
})


// del
const del1 = document.getElementById('del1')
const del2 = document.getElementById('del2')
const del3 = document.getElementById('del3')
const del4 = document.getElementById('del4')

del1.addEventListener("click", function(){
  document.getElementById("a1").innerText = "ALARM 1";
})
del2.addEventListener("click", function(){
  document.getElementById("a2").innerText = "ALARM 2";
})
del3.addEventListener("click", function(){
  document.getElementById("a3").innerText = "ALARM 3";
})
del4.addEventListener("click", function(){
  document.getElementById("a4").innerText = "ALARM 4";
})


updateClock()
setInterval(updateClock, 1000);



