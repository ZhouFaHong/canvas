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


// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   var text = ctx.measureText("foo"); // TextMetrics object
//   text.width; // 16;
//   console.log('width:'+text.width);
// }

draw();

