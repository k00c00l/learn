(function () {
    var that = this;//让整个作用域内都可以通过that变量访问Game对象
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;//that记录了this指向的对象，所以可以在整个作用域内访问
    }
    //游戏开始
    Game.prototype.start = function () {
        this.food.render(this.map);
        this.snake.render(this.map);
        runSnake();
        bindKey();
    }
    //私有函数
    function runSnake() {
        var timerId =setInterval(function () {
            //每隔150毫秒让蛇走一格
            that.snake.move(that.food, that.map);
            that.snake.render(that.map);
            var maxX = that.map.offsetWidth / that.snake.width;
            var maxY = that.map.offsetHeight / that.snake.height;
            var headX = that.snake.body[0].x;
            var headY = that.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                alert('Game Over');
                clearInterval(timerId);
            }
            if (headY < 0 || headY >= maxY) {
                alert('Game Over');
                clearInterval(timerId);
            }
        },150)
    }
    //键盘操控
    function bindKey() {
        document.addEventListener('keydown', function(e) {
            //37-left, 38-top, 39-right, 40-bottom
            switch(e.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;        
            }
        },false)
    }
    window.Game = Game;
})()