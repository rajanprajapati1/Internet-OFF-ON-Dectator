const mouth = document.querySelector(".mouth");
const  eye1 = document.getElementById("fir");
const  eye2 = document.getElementById("sec");
const wifisingle = document.querySelector(".fa-wifi");
const line  = document.querySelector(".line");

const text = document.getElementById("text");
function OnlineStatus() {
  if (navigator.onLine) {
  eye2.style.rotate = '0deg';
  eye1.style.rotate = '0deg';
  mouth.classList.add("smile");
  line.classList.remove("disconnnect");
  text.style.color = "green";
  wifisingle.style.color = "#19af04";
  text.innerHTML = "Internet Connected";

} else {
  console.log("offline");  
  eye1.style.rotate = '-12deg';
  line.classList.add("disconnnect");
  eye2.style.rotate = '14deg';
  wifisingle.style.color = "#ef231c";
  mouth.classList.remove("smile");
  text.style.color = "red";
  text.innerHTML = "Internet DisConnected";
  
  }
}
window.addEventListener("online", OnlineStatus);
window.addEventListener("offline", OnlineStatus);

OnlineStatus();


