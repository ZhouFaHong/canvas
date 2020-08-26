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
    // 创建新 image 对象，用作图案
    var img = new Image();
    img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    img.onload = function() {
  
      // 创建图案
      var ptrn = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = ptrn;
      ctx.fillRect(0, 0, 150, 150);
  
    }
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0,0,innerWidth,innerHeight);
  var img = new Image();
  img.onload = function(){
    for (var i=0;i<4;i++){
      for (var j=0;j<3;j++){
        ctx.drawImage(img,j*50,i*38,50,38);
      }
    }
  };
  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
}

// 切片 Slicing
/**
 * drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
 * 第一个参数和其它的是相同的，都是一个图像或者另一个 canvas 的引用。
 * 其它8个参数最好是参照右边的图解，前4个是定义图像源的切片位置和大小，
 * 后4个则是定义切片的目标显示位置和大小。
 */

draw();

