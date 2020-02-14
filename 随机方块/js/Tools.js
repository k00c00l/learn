var Tools = {
    getRandom: function (min,max) {//生成随机数，返回值>=min&&<=max
        min = Math.ceil(min);//向上取整
        max = Math.floor(max);//向下取整
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
}