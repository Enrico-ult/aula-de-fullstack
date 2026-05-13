let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//Quadrado Azul (topo esquerdo)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(0,0,60,60);
ctx.strokeRect(0,0,60,60);
ctx.closePath();

//Quadrado Vermelho (topo direito)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(340,0,60,60);
ctx.strokeRect(340,0,60,60);
ctx.closePath();

//Figura preta (baixo direito)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(370,370,30,30);
ctx.strokeRect(370,370,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(340,370,30,30);
ctx.strokeRect(340,370,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(370,340,30,30);
ctx.strokeRect(370,340,30,30);
ctx.closePath();

//Figura Amarela (baixo esquerdo)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0,370,30,30);
ctx.strokeRect(0,370,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(30,370,30,30);
ctx.strokeRect(30,370,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0,340,30,30);
ctx.strokeRect(0,340,30,30);
ctx.closePath();

//Quadrado Azul Claro (esquerdo)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(0,170,30,30);
ctx.strokeRect(0,170,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(0,200,30,30);
ctx.strokeRect(0,200,30,30);
ctx.closePath();

//Quadrado Azul Claro (direito)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(370,185,30,15);
ctx.strokeRect(370,185,30,15);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(370,200,30,15);
ctx.strokeRect(370,200,30,15);
ctx.closePath();

//Arco circuferencia emcima (Verde)
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(200,200,120,1*Math.PI,1.25*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(200,200,120,1.75*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(200,200,80,1*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Linha Verde (Meio)
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.fillRect(0,200,400,1);
ctx.strokeRect(0,200,400,1);
ctx.closePath();

//Arco da circuferencia debaixo (Verde)
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(200,400,90,0*Math.PI,1.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(200,400,70,1.5*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Linha Cinza (Vertical)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'grey';
ctx.moveTo(200, 200);
ctx.lineTo(200, 400);
ctx.stroke();

//Circulo azul embaixo
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(200,400,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Quadrado Vermelho (Centro)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(149,202,50,50);
ctx.strokeRect(149,202,50,50);
ctx.closePath();

//Linhas Diagonais (Azul)
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();

//Linhas Diagonais (Vermelha)
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.moveTo(400, 0);
ctx.lineTo(200, 200);
ctx.stroke();

//Circulos (Amarelos)
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(100,300,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(300,300,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Circulo emcima (Azul)
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(200,150,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//Texto
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("Canvas", 165, 70);