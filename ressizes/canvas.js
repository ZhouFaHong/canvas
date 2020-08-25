const canvas = document.getElementById('canvas');

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
})


// 圆形类
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.strokeStyle = 'blue';
        // c.stroke();
        c.fill();
        c.fillStyle = this.color;
    }

    this.update = function () {
        if (this.x+this.radius > innerWidth || this.x-this.radius < 0){
            this.dx = -this.dx;
        }
    
        if (this.y+this.radius > innerHeight || this.y-this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if(mouse.x-this.x<50 && mouse.x-this.x>-50&&mouse.y-this.y<50 && mouse.y-this.y>-50){
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if(this.radius > this.minRadius){
            this.radius -= 1;
        }
        this.draw();
    }
}

/// 制造100个圆
let circleArray = [];
console.log(circleArray);

function init (){
    circleArray = [];
    for (let index = 0; index < 1000; index++) {
        let radius = Math.random()*5+1; // 半径
        let x = Math.random() * (window.innerWidth -2*radius)+radius;
        let y = Math.random() * (window.innerHeight -2*radius)+radius;
        let dx = (Math.random()-0.5);
        let dy = (Math.random()-0.5);
        circleArray.push(new Circle(x,y,dx,dy,radius));
    }
}
// 动画制作
function animate() {
    c.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(animate);
    for (let index = 0; index < circleArray.length; index++) {
        circleArray[index].update();
    }
}
init();
// 开启动画
animate();