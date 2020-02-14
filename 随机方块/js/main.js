//获取父容器
var container =document.getElementById('container');
//创建空数组 存储随机生成的box
var boxes = [];
//随机设置每一个box的颜色
for (var i = 0; i < 10; i++) {
    var r = Tools.getRandom(0, 255);
    var g = Tools.getRandom(0, 255);
    var b = Tools.getRandom(0, 255);
    var box = new Box(container, {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    });
    boxes.push(box);
}
//设置定时器更改box位置
setInterval(randomBox, 500);
//页面加载完成后先调用随机位置
randomBox();
//生成随机位置
function randomBox() {
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        box.random();
    }
}