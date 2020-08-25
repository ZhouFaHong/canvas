
const canvas = document.getElementById('canvas');

canvas.width = 400;
canvas.height = 400;

var ctx = canvas.getContext('2d');

console.log(canvas);

ctx.strokeStyle = "#0695FF";        //定义矩形的颜色
ctx.strokeRect(50,50,100,100);
ctx.strokeRect(50,170,100,100);


function imgType(ty) {
    let type = ty.toLowerCase().replace(/jpg/i, 'jpeg');
    var r = type.match(/png|jpeg|bmp|gif/)[0];
    return 'image/' + r;
}

function download() {

    let type = 'png';   //设置下载图片的格式
    
    let img_png_src = canvas.toDataURL("image/png");  //将canvas保存为图片

    let imgData = img_png_src.replace(imgType(type),'image/octet-stream');

    let filename = '图片' + '.' + type; //下载图片的文件名

    saveFile(imgData,filename);
}

let saveFile = function(data, fileName){
    let save_link = document.createElement('a');
    save_link.href = data;
    save_link.download = fileName;

    let event = document.createEvent('MouseEvents');
    event.initEvent("click", true, false);
    save_link.dispatchEvent(event);
};




