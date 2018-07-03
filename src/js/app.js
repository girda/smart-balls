import Mouse from './mouse';
import Ball from './ball';

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
// document.body.appendChild(canvas);
let size = 20;
canvas.width = size;
canvas.height = size;


let canvas1 = document.createElement('canvas');
let wrapper = document.querySelector('.canvas');
document.body.appendChild(canvas1);
let ctx1 = canvas1.getContext('2d');
ctx1.fillStyle = '#000000';
let size1 = 400;
canvas1.width = size1;
canvas1.height = size1;

let img = new Image();
let images = ['img/google-plus.svg','img/facebook.svg','img/snow-middle.svg'];
let i = 0;

let setTimeout1 = setTimeout( function tick() {
  if ( i >= images.length ) i = 0;
  img.src = images[i];
  i++;
  img.onload = getCoordsSvg;
  setTimeout1 = setTimeout(tick, 5000);
}, 0);

let mouse = new Ball(0,0,30,'transparent');
let pos = new Mouse(canvas1);
let balls =[];

function getCoordsSvg() {
  ctx.clearRect(0,0,size,size);
  ctx.drawImage(img,0,0,size,size);

  let data = ctx.getImageData(0,0,size,size);
  let mydat = data.data;
  balls =[];

  for (let i = 0; i < size*size; i++) {

    if( mydat[i * 4 + 1] > 5 ) {
      let x = i%size;
      let y = Math.floor(i/size);
      balls.push(new Ball(50+x*15, 50+y*15, 4));
    }
  }

};


function Render() {
  window.requestAnimationFrame(Render);
  ctx1.clearRect(0,0,size1,size1);

  mouse.setPos(pos.x, pos.y);
  mouse.draw(ctx1);

  balls.forEach(ball => {
    ball.think(pos);
    ball.draw(ctx1);
  });
}

Render();


