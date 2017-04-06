/**
 * Created by ROG STRIX S5 on 2017/1/18.
 */

//获取元素对象
var redstyle = document.getElementById('redstyle');
var yellowstyle = document.getElementById('yellowstyle');
var greenstyle = document.getElementById('greenstyle');
var bluestyle = document.getElementById('bluestyle');
var customstyle = document.getElementById("customstyle");
var sytledesc = document.getElementById("sytledesc");

//设置红色主题
redstyle.onclick = function () {
    setStyle('red');
    saveStyle('red');
};

//设置黄色主题
yellowstyle.onclick = function () {
    setStyle('yellow');
    saveStyle('yellow');
}

//设置绿色主题
greenstyle.onclick = function () {
    setStyle('green');
    saveStyle('green');
}

//设置蓝色主题
bluestyle.onclick = function () {
    setStyle('blue');
    saveStyle('blue');
}

//从storage中取之前设置的主题并初始化
var strStoreStyle = window.localStorage ? localStorage.getItem("customstyle") : Cookie.read("customstyle");
if (strStoreStyle != null && strStoreStyle != '') {
    setStyle(strStoreStyle)
}

//设置主题
function setStyle(style) {
    customstyle.setAttribute("href", "./css/" + style + "style.css");
    sytledesc.innerHTML="当前选中的是"+style+",点击切换主题→";
}

//保存主题
function saveStyle(style) {
    if (window.localStorage) {
        localStorage.setItem("customstyle", style);
    } else {
        Cookie.write("customstyle", style);
    }
}