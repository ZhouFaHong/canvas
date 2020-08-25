const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(100,300,100,100);

console.log(canvas);

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

var mouse = {
    x: undefined,
    y:undefined
}

let maxRadius = 40;
let minRadius = 2;

let colorArray = [
    '#1E90FF',
    '#FFD700',
    '#FF4500',
    '#40E0D0',
    '#00FF00',
    '#F0FFFF',
    '#DCDCDC',
    '#4682B4'
];

window.addEventListener('mousemove',function(event){
    
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('click',function(){
    // 开启动画
    init();
})




// utility
function randomIntFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function randomColor(colors) {
    return colors[Math.floor(Math.random()*colors.length)];
}

let gravity = 1;
let friction = 0.99;

// 圆形类
function Ball(x,y,dx,dy,radius,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.stroke();
        c.fill();
        c.fillStyle = this.color;
        c.closePath();
    }

    this.update = function () {
        if(this.y + this.radius + this.dy > canvas.height){
            this.dy = -this.dy * friction;
        }else{
            this.dy += gravity;
            // console.log(this.dy);
        }

        if (this.x + this.radius + this.dx>canvas.width || this.x - radius<=0) {
            this.dx = -this.dx;
        }



        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

/// 制造100个圆
let ballArray;
let ball;
function init (){
    ballArray = [];
    for (let index = 0; index < 500; index++) {
        let radius = randomIntFromRange(8,30);
        let x = randomIntFromRange(radius,canvas.width - radius);
        let y = randomIntFromRange(0,canvas.height - radius);
        let dx = randomIntFromRange(-2,2);
        let dy = randomIntFromRange(-2,2);
        ballArray.push(new Ball(x,y,dx,dy,radius,randomColor(colorArray)));
    }
    console.log(ballArray);
}
// 动画制作
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    // c.fillText('Hello world!',mouse.x,mouse.y)
    // ball.update();
    for (let index = 0; index < ballArray.length; index++) {
        ballArray[index].update();
        
    }
}
init();
// 开启动画
animate();