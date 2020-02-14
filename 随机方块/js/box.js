//方块构造函数，参数对应(父容器，可选参数{背景颜色，宽度，高度，x坐标，y坐标})
function Box (parent,options) {
    //判断参数是否传入，未传入参数则返回默认值，防止程序出错
    options = options || {};
    this.backgroundColor = options.backgroundColor || 'red';
    this.width = options.width || 30;
    this.height = options.height || 30;
    this.x = options.x || 0;
    this.y = options.y || 0;
    //创建对应的div
    this.div = document.createElement('div');
    parent.appendChild(this.div);
    this.parent = parent;
    this.init();//调用初始化方法
}
//给构造函数原型对象添加 初始化方块样式的方法
Box.prototype.init = function () {
    var div = this.div;
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = 'absolute';//脱离文档流
}
//给构造函数原型对象添加 随机生成方块位置的方法
Box.prototype.random = function () {
    var parent = this.parent;//父容器
    var x = Tools.getRandom(0, parent.offsetWidth / this.width - 1) * this.width;
    var y = Tools.getRandom(0, parent.offsetHeight / this.height - 1) * this.height;
    this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';
}
//给构造函数原型对象添加 定时改变位置的方法