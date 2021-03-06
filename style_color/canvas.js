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

// 矩形（Rectangular）
function drawRect(){

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);


    ctx.beginPath();
    ctx.moveTo(75+100, 50+100);
    ctx.lineTo(100+100, 75+100);
    ctx.lineTo(100+100, 25+100);
    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.beginPath();  
    ctx.strokeStyle = 'green';  
    ctx.moveTo(100,200);
    ctx.lineTo(100, 300);
    ctx.lineTo(100+50, 250);
    ctx.lineTo(100, 200);
    ctx.stroke();

    

};


// 移动笔触
function drawSmile() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){

        var ctx = canvas.getContext('2d');
    
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
        ctx.stroke();
        
        
        
        let offset = 100; // 平移值
        // 填充三角形
        ctx.beginPath();
        ctx.moveTo(25+offset, 25+offset);
        ctx.lineTo(105+offset, 25+offset);
        ctx.lineTo(25+offset, 105+offset);
        ctx.fill();

        // 描边三角形
        ctx.beginPath();
        ctx.moveTo(125+offset, 125+offset);
        ctx.lineTo(125+offset, 45+offset);
        ctx.lineTo(45+offset, 125+offset);
        ctx.closePath();
        ctx.stroke();
    }
  }



//   drawSmile();



// Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = '#fa34a3';
// c.strokeStyle = 'red';
// c.stroke();

// Arc or Circle
// c.beginPath();
// c.arc(300,300,50,0,Math.PI * 2,false);
// c.strokeStyle = 'red';
// c.stroke();

// for (let index = 0; index < 100; index++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI * 2,false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }

// c.beginPath();
// c.arc(200,200,30,0,Math.PI * 2,false);
// c.strokeStyle = 'blue';
// c.stroke();


function draw() {
    
    for (var i=0;i<6;i++){
        for (var j=0;j<6;j++){
        ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
                            Math.floor(255-42.5*j) + ',0)';
        ctx.fillRect(j*25,i*25,25,25);
        }
    }
}

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i=0;i<6;i++){
        for (var j=0;j<6;j++){
        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
                            Math.floor(255-42.5*j) + ')';
        ctx.beginPath();
        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
        ctx.stroke();
        }
    }
}

/// globalAlpha 属性在需要绘制大量拥有相同透明度的图形时候相当高效。
function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    // 画背景
    ctx.fillStyle = '#FD0';
    ctx.fillRect(0,0,75,75);
    ctx.fillStyle = '#6C0';
    ctx.fillRect(75,0,75,75);
    ctx.fillStyle = '#09F';
    ctx.fillRect(0,75,75,75);
    ctx.fillStyle = '#F30';
    ctx.fillRect(75,75,75,75);
    ctx.fillStyle = '#FFF';
  
    // 设置透明度值
    ctx.globalAlpha = 0.2;
  
    // 画半透明圆
    for (var i=0;i<7;i++){
        ctx.beginPath();
        ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
        ctx.fill();
    }
  }

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    // 画背景
    ctx.fillStyle = 'rgb(255,221,0)';
    ctx.fillRect(0,0,150,37.5);
    ctx.fillStyle = 'rgb(102,204,0)';
    ctx.fillRect(0,37.5,150,37.5);
    ctx.fillStyle = 'rgb(0,153,255)';
    ctx.fillRect(0,75,150,37.5);
    ctx.fillStyle = 'rgb(255,51,0)';
    ctx.fillRect(0,112.5,150,37.5);

    // 画半透明矩形
    for (var i=0;i<10;i++){
        ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
        for (var j=0;j<4;j++){
        ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
        }
    }
}

// 这个属性设置当前绘线的粗细。属性值必须为正数。默认值是1.0。

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i = 0; i < 10; i++){
      ctx.lineWidth = 1+i;
      ctx.beginPath();
      ctx.moveTo(5+i*14,5);
      ctx.lineTo(5+i*14,140);
      ctx.stroke();
    }
  }

  // 属性 lineCap 的值决定了线段端点显示的样子。

  function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var lineCap = ['butt','round','square'];
  
    // 创建路径
    ctx.strokeStyle = '#09f';
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(140,10);
    ctx.moveTo(10,140);
    ctx.lineTo(140,140);
    ctx.stroke();
  
    // 画线条
    ctx.strokeStyle = 'black';
    for (var i=0;i<lineCap.length;i++){
      ctx.lineWidth = 15;
      ctx.lineCap = lineCap[i];
      ctx.beginPath();
      ctx.moveTo(25+i*50,10);
      ctx.lineTo(25+i*50,140);
      ctx.stroke();
    }
  }

  // lineJoin 的属性值决定了图形中两线段连接处所显示的样子。
  function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var lineJoin = ['round', 'bevel', 'miter'];
    ctx.lineWidth = 10;
    for (var i = 0; i < lineJoin.length; i++) {
      ctx.lineJoin = lineJoin[i];
      ctx.beginPath();
      ctx.moveTo(-5, 5 + i * 40);
      ctx.lineTo(35, 45 + i * 40);
      ctx.lineTo(75, 5 + i * 40);
      ctx.lineTo(115, 45 + i * 40);
      ctx.lineTo(155, 5 + i * 40);
      ctx.stroke();
    }
  }

// 用 setLineDash 方法和 lineDashOffset 属性来制定虚线样式. 
// setLineDash 方法接受一个数组，来指定线段与间隙的交替；
// lineDashOffset 属性设置起始偏移量.

var ctx = document.getElementById('canvas').getContext('2d');
var offset = 0;

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10,10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
  
    // Create gradients
    var lingrad = ctx.createLinearGradient(0,0,0,150);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(0.5, '#fff');
    lingrad.addColorStop(0.5, '#26C000');
    lingrad.addColorStop(1, '#fff');
  
    var lingrad2 = ctx.createLinearGradient(0,50,0,95);
    lingrad2.addColorStop(0.5, '#000');
    lingrad2.addColorStop(1, 'rgba(0,0,0,0)');
  
    // assign gradients to fill and stroke styles
    ctx.fillStyle = lingrad;
    ctx.strokeStyle = lingrad2;
    
    // draw shapes
    ctx.fillRect(10,10,130,130);
    ctx.strokeRect(50,50,50,50);
  
  }


  function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0,0,innerWidth,innerHeight);
    // 创建渐变
    var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.9, '#019F62');
    radgrad.addColorStop(1, 'rgba(1,159,98,0)');
    
    var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
    radgrad2.addColorStop(0, '#FF5F98');
    radgrad2.addColorStop(0.75, '#FF0188');
    radgrad2.addColorStop(1, 'rgba(255,1,136,0)');
  
    var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
    radgrad3.addColorStop(0, '#00C9FF');
    radgrad3.addColorStop(0.8, '#00B5E2');
    radgrad3.addColorStop(1, 'rgba(0,201,255,0)');
  
    var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
    radgrad4.addColorStop(0, '#F4F201');
    radgrad4.addColorStop(0.8, '#E4C700');
    radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
    
    // 画图形
    ctx.fillStyle = radgrad4;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = radgrad3;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = radgrad2;
    ctx.fillRect(0,0,150,150);
    ctx.fillStyle = radgrad;
    ctx.fillRect(0,0,150,150);
  }


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
    ctx.beginPath(); 
    ctx.arc(50, 50, 30, 0, Math.PI*2, true);
    ctx.arc(50, 50, 15, 0, Math.PI*2, true);
    ctx.fill("evenodd");
}
draw();

