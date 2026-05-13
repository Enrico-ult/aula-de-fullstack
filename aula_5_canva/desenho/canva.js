

let canvas = document.getElementById ('canvas')
let ctx = canvas.getContext ('2d')
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#FFC8B5';
ctx.strokeStyle = '#FFC8B5';
ctx.arc(200,300,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#FFC8B5';
ctx.strokeStyle = '#FFC8B5';
ctx.arc(100,300,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = '#FFC8B5';
ctx.strokeStyle = '#FFC8B5';
ctx.fillRect(110,60,80,240);
ctx.strokeRect(110,60,80,240);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#FD98A4';
ctx.strokeStyle = '#FD98A4';
ctx.arc(150,60,40,1*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();