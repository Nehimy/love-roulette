let x1;
let y1;

let x2;
let y2;

let distance;

function mouse(e){
 x1=  e.clientX;
 y1=  e.clientY;
  console.log("x1:" + x1);
  console.log("y1:" + y1);
}

function stop(e){
  x2=  e.clientX;
  y2=  e.clientY;
  console.log("x2:" + x2);
  console.log("y2:" + y2);
  move(x1, y1, x2, y2);
}

function move(x1, y1, x2, y2) {
  distance= Math.sqrt((x2 - x1) + (y2-y1));
  distance= Math.round(distance);
  console.log(distance);
}
