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



  drawSmile();



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

