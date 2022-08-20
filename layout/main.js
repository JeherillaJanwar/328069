
let t = 0;

let fillBarOn = "  width: 80%; transition: 0.4s ease-out;";
let fillBarOff =
  "  position: absolute; top: 0px; z-index: 3;width: 0px;height: 100%;background: rgb(0,154,217);background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);transition: 0.6s ease-out;";
let hoverStyleOn =
  "left: -50px  background-color: #201b29; border:1px solid wheat; transform: translateY(-50px);left:-60px;";
let hoverStyleOff =
  "left: 0px  background-color: #17141d; border:none; transform: translateY(0px); transition: 0.4s ease-out;";

document.addEventListener("keydown", function(event) {
  //seeing if t = right or left
  if (event.keyCode == 37) {
    t--;
    addLeftCss();
    checkStuff();
    console.log(t);
  } else if (event.keyCode == 39) {
    addRightCss();
    t++;
    console.log(t);
    checkStuff();
  } else if (event.keyCode == 13) {
    console.log(t);
    startApp(t);
  }
});

function checkStuff() {
  if (t < 1) {
    t = 0;
    document.getElementById("left").style = "border:2px solid white;";
  } else if (t > 4) {
    t = 4;
    document.getElementById("right").style = "border:2px solid white;";
  }

  if (t == 1) {
    document.getElementById("1").style = hoverStyleOn;
    // document.getElementById('1').style = ;
    document.getElementById("f1").style = fillBarOn;
  } else {
    document.getElementById("1").style = hoverStyleOff;
    document.getElementById("f1").style = fillBarOff;
  }
  if (t == 2) {
    document.getElementById("f2").style = fillBarOn;
    document.getElementById("2").style = hoverStyleOn;
  } else {
    document.getElementById("2").style = hoverStyleOff;
    document.getElementById("f2").style = fillBarOff;
  }
  if (t == 3) {
    document.getElementById("f3").style = fillBarOn;
    document.getElementById("3").style = hoverStyleOn;
  } else {
    document.getElementById("f3").style = fillBarOff;
    document.getElementById("3").style = hoverStyleOff;
  }
  if (t == 4) {
    document.getElementById("f4").style = fillBarOn;
    document.getElementById("4").style = hoverStyleOn;
  } else {
    document.getElementById("4").style = hoverStyleOff;
    document.getElementById("f4").style = fillBarOff;
  }
}
function startApp(t) {
  if (t == 1) {
    breakOut();
  }
  if (t == 2) {
    dualPong();
  }
  if (t == 3) {
    AttariShooter();
  }
  if (t == 4) {
    console.log("moregames coming soon :)");
  }
}

function breakOut() {
  window.location = "../pages/projects/breakout/atariBreakout.html";
}
function dualPong() {
  window.location = "../pages/projects/dual_pong/index.html";
}
function AttariShooter() {
  window.location = "../pages/projects/attariGame/index.html";
}

function addRightCss() {
  document.getElementById("right").style =
    "border:2px solid wheat;color: wheat;";
  document.getElementById("left").style = "border:2px solid white;";
}
function addLeftCss() {
  document.getElementById("right").style = "border:2px solid white;";
  document.getElementById("left").style =
    "border:2px solid wheat;color: wheat;";
}
