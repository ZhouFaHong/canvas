const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(100,300,100,100);

console.log(canvas);



function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0,0,innerWidth,innerHeight);
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
   
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "Black";
    ctx.fillText("Sample String", 5, 30);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,innerWidth,innerHeight);
  ctx.font = "48px serif";
  // ctx.textAlign = 'center';
  ctx.direction = 'inherit';
  ctx.strokeText("Hello world", 20, 50);
}


function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
  console.log('width:'+text.width);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
 
  canvas.width = 900;
  canvas.height = 600;
  canvas.style.border = "1px solid #000";

  // =S 绘制坐标参照系
  ctx.beginPath();
  ctx.moveTo(0,301);
  ctx.lineTo(900,301);
  ctx.strokeStyle = "teal";			
  ctx.stroke();		

  ctx.moveTo(450,0);
  ctx.lineTo(450,600);
  ctx.stroke();

  ctx.fillRect(445,295,10,10);
  // =E 绘制坐标参照系

  //绘制字体
  ctx.font = '20px "微软雅黑"';
  ctx.fillStyle = "red";
  ctx.textBaseline = "top";
  ctx.fillText("Top-g", 100, 300);

  ctx.textBaseline = "middle";
  ctx.fillText("middle-g", 200, 300);

  ctx.textBaseline = "bottom";
  ctx.fillText("bottom-g", 490, 300);
  ctx.textBaseline = "hanging";
  ctx.fillText("hanging", 490, 300);

  ctx.textBaseline = "Alphabetic";
  ctx.fillText("Alphabetic-g", 700, 300);


  //绘制字体 设置对齐方式
  ctx.fillStyle = "purple";
  ctx.textAlign = "left";
  ctx.strokeText("left", 450, 400);

  ctx.textAlign = "right";
  ctx.strokeText("right", 450, 440);

  ctx.textAlign = "start";
  ctx.strokeText("start", 450, 480);

  ctx.textAlign = "end";
  ctx.strokeText("end", 450, 520);

  ctx.textAlign = "center";
  ctx.strokeText("center", 450, 560);
}

draw();

