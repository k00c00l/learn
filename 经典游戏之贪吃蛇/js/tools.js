//这是一个工具对象，返回随机数
var Tools = {
    getRandom: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}