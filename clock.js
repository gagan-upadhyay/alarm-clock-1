function updateClock() {
  const hours = String(new Date().getHours()).padStart(2,'0');
  const minutes = String(new Date().getMinutes()).padStart(2,'0');
  const seconds = String(new Date().getSeconds()).padStart(2,'0');
  console.log(` Time is: ${hours}:${minutes}:${seconds}`);
    let timeElement = document.getElementById("clock");

  timeElement.innerHTML=`${hours}:${minutes}:${seconds}`
}



const btn = document.getElementById("btn")
btn.addEventListener("click", function btnclicked(){
  alert("this button has beed clicked");
  console.log(localStorage.setItem("alarm:", '12:67'));
});

document.getElementById('delbtn').addEventListener('click', function(){
  console.log(localStorage.getItem("alarm"));
})

setInterval(updateClock, 0);



