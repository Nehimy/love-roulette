let x1;
let y1;

let x2;
let y2;

let distance;

let torque;

document.querySelector('.roulette').ondragstart=rouletteDragStar;
document.querySelector('.roulette').ondragend=rouletteDragStop;

function rouletteDragStar(e){
 x1=  e.clientX;
 y1=  e.clientY;
  console.log("x1:" + x1);
  console.log("y1:" + y1);
}

function rouletteDragStop(e){
  x2=  e.clientX;
  y2=  e.clientY;
  console.log("x2:" + x2);
  console.log("y2:" + y2);
  move(x1, y1, x2, y2);
}

function move(x1, y1, x2, y2) {

  distance= Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2-y1), 2));
  distance= Math.round(distance);
  console.log("distance:" + distance);

  torque= Math.round(551/distance);
  console.log ("torque:" + torque);
  //document.querySelector('.roulette').style.animation= "rotate " + torque + "s";
  //document.querySelector('.roulette').style.transform = "rotate(0deg)";

  if (torque>=4) {
    torque=0;
    console.log("jale más fuerte");
    document.querySelector('.roulette').style.transform = "rotate(0deg)";
    alert("Jale más fuerte");
  }else   if (torque<=3) {
    // torque= Math.floor(Math.random() * 20) + 13;
    torque= Math.floor(Math.random() * (20 - 12 + 1) ) + 12;
    console.log("nuevo valor de torque:" + torque);
    //document.querySelector('.roulette').style.transform = "rotate("+Math.pow(360, torque) + "deg)";
    document.querySelector('.roulette').style.transform = "rotate("+ (360 * torque) + "deg)";
  }
}
