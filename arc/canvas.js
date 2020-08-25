const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

/**
 *  arc(x, y, radius, startAngle, endAngle, anticlockwise)
    画一个以（x,y）为圆心的以radius为半径的圆弧（圆），
    从startAngle开始到endAngle结束，
    按照anticlockwise给定的方向（默认为顺时针）来生成。
 */
/**
 * 这里详细介绍一下arc方法,该方法有六个参数：
 * x,y为绘制圆弧所在圆上的圆心坐标。radius为半径。
 * startAngle以及endAngle参数用弧度定义了开始以及结束的弧度。
 * 这些都是以x轴为基准。参数anticlockwise为一个布尔值。
 * 为true时，是逆时针方向，否则顺时针方向。
 */
/**
 * 注意：arc()函数中表示角的单位是弧度，不是角度。
 * 角度与弧度的js表达式:弧度=(Math.PI/180)*角度。
 */

console.log(canvas);

function drawArc(){

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
            ctx.beginPath();
            var x = 25 + j * 50; // x 坐标值
            var y = 25 + i * 50; // y 坐标值
            var radius = 20; // 圆弧半径
            var startAngle = 0; // 开始点
            var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
            var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

            if (i>1){
                ctx.fillStyle = 'blue'
                ctx.fill();
            } else {
                ctx.strokeStyle = 'red'
                ctx.stroke();
            }
        }
    }

    

};

drawArc();



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

