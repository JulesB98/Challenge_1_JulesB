var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

function change1() {
  document.getElementById("Fuel").src = "images/Fuel25.png";
}
function change2() {
  document.getElementById("Fuel").src = "images/Fuel50.png";
}
function change3() {
  document.getElementById("Fuel").src = "images/Fuel75.png";
}
function change4() {
  document.getElementById("Fuel").src = "images/FuelFull.png";
}
function openPage() {
  var McDonalds = window = open("https://www.mcdonalds.com");
}
function openPage2() {
  var McDonalds = window = open("https://www.ubereats.com/");
}
