
'use strict';

const cvs = document.querySelector('canvas');

const size = cvs.width;

const ctx = cvs.getContext('2d');

const drawSquare = (x, y, sz, color, angle) => {
  ctx.translate(x + 0.5 * sz, y + 0.5 * sz);
  ctx.rotate(angle);
  
  ctx.fillStyle = color;
  ctx.fillRect(-0.5 * sz, -0.5 * sz, sz, sz);
  
  ctx.resetTransform();
}

drawSquare(0,0,500,"black",0)

drawSquare(50,50,400,"blue",0.3)

drawSquare(90,90,320,"black",0.6)
