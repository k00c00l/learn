//开启新的作用域
(function () {
    var elements = [];//记录蛇节
    function Snake(options) {
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.direction = options.direction || 'right';
        this.body = [
            {x: 3, y: 2, color: 'red'},//此处x指代的是对应蛇节前面的方块个数
            {x: 2, y: 2, color: 'blue'},
            {x: 1, y: 2, color: 'blue'}
        ];//用数组存储蛇节，方便后续蛇节的增加
    }
    //把蛇对象渲染到map上
    Snake.prototype.render = function (map) {
        //渲染蛇之前先删除已经渲染的div
        remove();
        //循环创建div元素，并设置对应的样式
        for (var i = 0, len = this.body.length; i < len; i++) {
            var object = this.body[i];
            var div = document.createElement('div');
            map.appendChild(div);
            elements.push(div);//利用数组的push方法记录蛇节
            div.style.position = "absolute";//定位
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = this.body[i].x * this.width + 'px';
            div.style.top = this.body[i].y * this.height + 'px';
            div.style.backgroundColor = this.body[i].color;
        }
    }
    //删除蛇
    function remove() {
        for (var i = elements.length - 1; i>=0; i--) {
            elements[i].parentNode.removeChild(elements[i]);//从视觉上删除已经渲染的蛇
            elements.splice(i, 1);
        }
    }
    //蛇的移动方法，原理为把蛇分为头部和身体
    Snake.prototype.move = function (food, map) {
        //身体的处理只需要让当前的蛇节移动到上一个蛇节的位置处即可，与方向无关
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //头部的移动需要判断方向
        var head = this.body[0];
        switch(this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }
        //判断蛇运动中吃掉食物
        var headX = head.x * this.width;
        var headY = head.y * this.height;
        if (headX === food.x && headY === food.y) {
            //吃到食物后，让蛇增加一节
            var last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            //让食物重新刷新地点
            food.render(map);
        }

    }
    //设置顶级对象属性
    window.Snake = Snake;
})()