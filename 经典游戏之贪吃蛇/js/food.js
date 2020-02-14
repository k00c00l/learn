//设置自调用函数》》》开启新的作用域，避免后续js文件可能带来的命名冲突
(function () {
    var elements = [];//记录上一次创建的食物，用来索引删除
    //食物对象构造函数 可选参数options{x坐标,y坐标，宽，高，背景颜色}
    var Food = function (options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.backgroundColor || 'green';
    }

    //初始化食物对象，并输出到地图上
    Food.prototype.render = function (map) {
        remove();
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
        var div = document.createElement('div');
        map.appendChild(div);
        elements.push(div);
        div.style.left = this.x +'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
        div.style.position = 'absolute';
    }
    //删除食物对象功能不能让其他人调用，故定义为普通函数，不提供接口
    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {//倒序遍历删除数组，防止数组位移后索引值改变
            elements[i].parentNode.removeChild(elements[i]);//删除dom中div节点即食物
            elements.splice(i, 1);//调用数组删除方法，他有2个参数(开始位置，删除个数)
        }
    }
    //增加顶级对象window的属性Food=Food Food构造函数便可在外部访问《《《《《《
    window.Food = Food;
})()