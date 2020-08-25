const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

/**
 * Path2D()会返回一个新初始化的Path2D对象（可能将某一个路径作为变量——创建一个它的副本，
 * 或者将一个包含SVG path数据的字符串作为变量）。
 * 
 * 所有的路径方法比如moveTo, rect, arc或quadraticCurveTo等，
 * 如我们前面见过的，都可以在Path2D中使用。
 *  
 */

console.log(canvas);

function drawQuadraticCurve() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        let q = new Path2D();
        // 二次(quadratic)贝塞尔曲线
        
        q.moveTo(75, 25);
        q.quadraticCurveTo(25, 25, 25, 62.5);
        q.quadraticCurveTo(25, 100, 50, 100);
        q.quadraticCurveTo(50, 120, 30, 125);
        q.quadraticCurveTo(60, 120, 65, 100);
        q.quadraticCurveTo(125, 100, 125, 62.5);
        q.quadraticCurveTo(125, 25, 75, 25);
        ctx.strokeStyle = 'red';
        ctx.stroke(q);
        

        let rect = new Path2D();
        rect.moveTo(300,200);
        rect.lineTo(300,400);
        rect.lineTo(500,300);
        rect.lineTo(300,200);
        ctx.strokeStyle = 'blue';
        ctx.stroke(rect);

        
        // 使用 SVG paths
        var p = new Path2D("M100 200 h 80 v 80 h -80 Z");
        ctx.strokeStyle = 'red';
        ctx.stroke(p);
    }
}

function drawbezierCurve() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        //三次贝塞尔曲线
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();


    }
}
// 二次(quadratic)贝塞尔曲线
drawQuadraticCurve();
// 三次贝塞尔曲线
// drawbezierCurve()




