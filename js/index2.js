//生产100个li，里面有4个div


var oUl = document.querySelector(".oUl");
var wrapper = document.querySelector('.wrapper');
var btn = document.querySelectorAll('ol li');
var css = document.getElementsByTagName('style')[0];
var n = 0,
    timer = null;

function createDom() {
    var num = 100;
    var allWidth = wrapper.offsetWidth;
    var width = allWidth / num;
    for (var i = 0; i < num; i++) {
        var oLi = document.createElement('li');
        oLi.style.width = width + 'px';
        oLi.style.transitionDelay = (i / num * 0.3) + 's';
        for (var j = 0; j < 4; j++) {
            var oDiv = document.createElement('div');
            //每个div只有图片的一点点，所以需要左移
            oDiv.style.backgroundPositionX = (-i) * width + 'px';
            oLi.appendChild(oDiv);
        }
        oUl.appendChild(oLi);
    }
    bindEvent();
    play();
}
createDom();
// 点击
function bindEvent() {
    var n;
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onclick = function() {
            n = this.index;
            for (var i = 0; i < btn.length; i++) {
                btn[i].className = '';
            }
            this.className = 'on';
            //所有的li旋转n*90deg
            css.innerHTML += '.wrapper ul li {transform: rotateX(' + (n * 90) + 'deg);}';
        };

    }
    oUl.addEventListener('mouseenter', function() {
        clearInterval(timer);
    });
    oUl.addEventListener('mouseleave', function() {
        play();
    });
}

function play() {
    timer = setInterval(function() {
        n++;
        n %= 4;
        for (var i = 0; i < btn.length; i++) {
            btn[i].className = '';
        }

        btn[n].className = 'on';
        css.innerHTML += '.wrapper ul li {transform: rotateX(' + (n * 90) + 'deg);}';
    }, 2000);

}