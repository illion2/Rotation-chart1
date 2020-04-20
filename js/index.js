var oImg = document.getElementsByTagName('img');
var len = oImg.length;
//默认中间大图
var curDisply = 0;

function init() {
    show();
    // 点击事件
    bindEvent();
    // 自动轮播
    play();

}
init();
//初始图片平铺展示
function show() {
    var mLen = Math.floor(len / 2);
    var lIndex, rIndex; //左侧所有，右侧索引
    for (var i = 0; i < mLen; i++) {
        //确定索引值
        lIndex = len + curDisply - i - 1;
        if (lIndex > len - 1) { //判断索引值的临界值
            lIndex -= len;
        }
        oImg[lIndex].style.transform = 'translateX(' + (-150 * (i + 1)) + 'px) rotateY(30deg)';

        rIndex = curDisply + i + 1;
        if (rIndex > len - 1) {
            rIndex -= len;
        }
        oImg[rIndex].style.transform = 'translateX(' + (150 * (i + 1)) + 'px) rotateY(-30deg)';
    }
    oImg[curDisply].style.transform = 'translateZ(150px)';
}
//鼠标事件
function bindEvent() {
    for (var i = 0; i < len; i++) {

        (function(i) { //立即执行函数
            oImg[i].onclick = function() {
                // console.log(i);
                curDisply = i;
                show();
            };
            oImg[i].onmouseenter = function() {
                clearInterval(timer);
            };
            oImg[i].onmouseleave = function() {
                play();
            }
        })(i);

    }
}
//自动轮播
function play() {
    timer = setInterval(function() {
        if (curDisply == len - 1) {
            curDisply = 0;
        } else {
            curDisply++;
        }
        show();
    }, 2000);
}