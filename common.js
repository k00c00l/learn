function getLastElementChild(element) {//获取节点中的做后一个元素节点
    var node, nodes = element.childNodes, i = element.childNodes.length - 1;
    while (node = nodes[i--]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

function getFirstElementChild(element) {//获取节点中的第一个元素节点
    var node, nodes = element.childNodes, i = 0;
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

function getNextElementSibling(element) {//获取下一个兄弟元素节点
    var eles = element;
    while (ele = eles.nextSibling) {
        if (ele.nodeType === 1) {
            return ele;
        }
    }
    return null;
}

function getPreviousSibling(element) {//获取上一个兄弟元素节点
    var eles = element;
    while (ele = eles.previousSibling) {
        if (ele.nodeType === 1) {
            return ele;
        }
    }
    return null;
}

function setInnerText(element, content) {//解决innerText和innerConten兼容性问题
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    } else {
        elemet.textContent = content;
    }
}

//处理addEventListener兼容性问题
function addEventListener(element,eventName,fn) {//参数：对象，事件名，调用的函数
    //判断当前浏览器是否支持 addEventListener 方法 
    if (element.addEventListener) {//检验对象是否有addEventListener属性
        element.addEventListener(eventName,fn);
    }else if (element.attachEvent) {//兼容ie10以下
        element.attachEvent('on' + eventName, fn);
    }else {//以上方法都不适用
        element['on' + eventName] = fn;//用[]操作符替代.操作符  element.('on' + EventName) = fn
    }
}

//removeEventListener兼容性处理
function removeEventListener(element,eventName,fn) {
    if (element.removeEventListener) {//检验对象是否有removeEventListener属性
        element.removeEventListener(eventName);
    }else if (element.detachEvent) {//兼容IE10 以下
        element.detachEvent('on' + eventName);
    }else {//以上方法都不适用
        element['on' + eventName] = null;//用[]操作符替代.操作符  element.('on' + EventName) = null
    }
}

//获取页面滚动距离的兼容性处理
//大部分浏览器支持document.body.scrollDirection
function getScroll() {//返回滚动高度和宽度的对象
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
    }
}

//获取鼠标在page中的位置处理兼容性
function getPage(e) {//返回对象
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop; 
    return {
        pageX: pageX,
        pageY: pageY,
    }
}