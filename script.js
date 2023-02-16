let x1;
let y1;

let x2;
let y2;

let Ti, Tf, Tt, V, F, angle;

let distance, torque;
let previousValue=0;

/*
  Eventos arrastre

  Ondragstart: Cuando hacemos click empieza el arrastre.
  Ondragend: Cuando soltamos el click termina el arrastre.
 */

document.querySelector('.roulette').ondragstart=rouletteDragStar;
document.querySelector('.roulette').ondragend=rouletteDragStop;

/*
  Inicio del arrastre
*/
function rouletteDragStar(e){
  x1=  e.clientX;
  y1=  e.clientY;
  Ti= Date.now();
}

/*
  Fin del arrastre
*/
function rouletteDragStop(e){
  x2=  e.clientX;
  y2=  e.clientY;
  Tf= Date.now();
  move(x1, y1, x2, y2, Ti, Tf);
}

function move(x1, y1, x2, y2, Ti, Tf) {
  // Distancia entre 2 puntos
  distance= Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2-y1), 2));
  distance= Math.round(distance);

  // Tiempo total
  Tt= Tf - Ti;
  console.log("Tf:" + Tf);
  console.log("Ti:" + Ti);

  console.log("Tt:" + Tt);
  V= distance / Tt;
  console.log("V=" + V);

  F= V * 9.8
  console.log("F:" + F);

  torque= Math.round(306/F);
  console.log("torque:" + torque);

  if (torque>89) {
    document.querySelector('.message-alert').style.display='grid';
    document.querySelector('.container-transparent').style.display='grid';

  }else {
    torque= Math.floor(Math.random() * (22 - 5 + 1) ) + 5;
    // document.querySelector('.roulette').style.transform = "rotate("+ (Math.pow(360, torque)) + "deg)";
    angle= Math.floor(Math.random() * (359 - 30 + 1) ) + 30;
    console.log("angle:" + angle);
    torque= (360 * torque) + 360 + angle +  previousValue;
    previousValue = torque;
    console.log(" previousValue:" +  previousValue);
    // document.querySelector('.roulette').style.transform = "rotate("+ 360*torque + "deg)";
    document.querySelector('.roulette').style.transform = "rotate("+ torque + "deg)";
  }
  if(previousValue >= 11421){
    previousValue=0;
  }
}




/******************************** Delete ********************************/

let img = document.querySelector('.message-alert img');

img.onclick = function(event){

  document.querySelector('.message-alert').style.display='none';
  document.querySelector('.container-transparent').style.display='none';

}
