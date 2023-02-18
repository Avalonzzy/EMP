/* 早上：6-8点、
上午：8-11点。
中午的时间段一般分为：中午：11-13点。
下午的时间段一般分为：下午：14-17点。
晚上的时间段一般分为：晚上：18-22点、
傍晚：17-18点、
黄昏：16-17点、午夜：23-1点、
夜间：19-5点。 */
function getHello() {
  var hello = "";
  var date = new Date();
  let hour = date.getHours();
  if (hour > 6 && hour <= 8) {
    hello = "早上好!";
    return hello;
  } else if (hour > 8 && hour <= 11) {
    hello = "上午好!";
    return hello;
  } else if (hour > 11 && hour <= 14) {
    hello = "中午好!";
    return hello;
  } else if (hour > 14 && hour <= 17) {
    hello = "下午好!";
    return hello;
  } else if (hour > 17 && hour <= 18) {
    hello = "傍晚好!";
    return hello;
  } else {
    hello = "晚上好!";
    return hello;
  }
}

//顶部打招呼事件
var hello = document.querySelector("h2");
hello.innerText = getHello();

//获取当前准确时间函数
function getPresentTime() {
  var date = new Date();
  //获取年份
  let year = date.getFullYear();
  //月份返回值是索引值，需要加一得到真实月份
  let month = date.getMonth() + 1;
  //获取某月中的一天，通常为1-31
  let day = date.getDate();
  //获取星期索引
  let week = date.getDay();
  //星期索引中的0代表周日
  var weekArr = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var weekDay = weekArr[week];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  var now =
    "现在是" +
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    weekDay +
    "[" +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    "]";
  return now;
}
var presentTime = document.getElementById("presentTime");
presentTime.innerText = getPresentTime();
var body = document.body;
var BGImg = document.querySelectorAll(".backGroundImg");
for (let i = 0; i < BGImg.length; i++) {
  BGImg[i].onclick = function () {
    console.log(this.src);
    //为body设置背景图片
    body.style.backgroundImage = "url(" + this.src + ")";
  };
}
/* var ul2 = document.getElementById("table2");
var list2 = ul2.children;
for (let i = 0; i < list2.length; i++) {
  //鼠标位于上方
  list2[i].onmouseover = function () {
    //这里的children是指将被隐藏或显示的下拉ul表
    this.children[1].style.display = "block";
  };
  //鼠标离开
  list2[i].onmouseout = function () {
    this.children[1].style.display = "none";
  };
}
 */
//jQuery方法获取id为table2的ul表下的所有li（隐式迭代）
var $list2=$('#table2>li');
console.log($list2);
//运用jQuery中的隐式迭代，与上方for循环结果一致
$list2.mouseover(function(){
    $(this).children("ul").show();
});
$list2.mouseout(function(){
    $(this).children("ul").hide();
});

//'$'是jQuery的别称，同时也是其顶级对象
$(function () {
  // alert(11);
});
// 1.DOM对象:用原生js获取过来的对象就是DOM对象
var myDiv = document.querySelector("div"); //myDiv是DOM对象
// console.dir(myDiv);
// // 2.jQuery对象:用jquery方式获取过来的对象是jQuery对象。本质:通过$把DOA元素进行了包装
// console.log($("div")); // $( 'div ')是一个jQuery对象,以伪数组形式存储
// // 3. jQuery对象只能使用 jQuery方法，DOM对象则使用原生的 JavaScript属性和方法
// console.log($("ul"));


var myVideo=document.querySelector('video');
//DOM对象转jQuery对象
var $myVideo=$(myVideo);
//为video元素添加css修饰
$myVideo.css({"height":"150px","display":"inline-block","margin-top":"100px"});
var button = document.querySelectorAll("button");
// 常规DOM对象设置事件:
/* button[0].onclick=function(){
    myVideo.play();
}
button[1].onclick=function(){
    myVideo.pause();
}
 */
//使用jQuery转换为DOM对象设置事件：
var $button=$(button);
$button[0].onclick=function(){
    myVideo.play();
}
$button[1].onclick=function(){
    myVideo.pause();
}

/* //使用jQuery设置table3的孩子的背景颜色
// var ul3=$('li');这句指令会导致所有li全部被修改背景颜色，
// 原因是jQuery具有隐式迭代
var $list3=$('.child');
console.log($list3);
//jQuery无法直接使用style，正确用法如下
$list3.css("background","orange")
//对第二个子li背景颜色进行修改
var $list32=$('.child:eq(1)');
$list32.css("background","lightBlue");
//操作奇数子li背景颜色为violet
$("#table3 li:odd").css("background","violet");
$list3.get(1).style.backgroundColor='blue'; */

//dom 结构绘制完毕后就执行
$(function(){
    var $list3=$('.child');
    $list3.click(function(){
        //这里this单指当前被点击的元素
        $(this).css("backgroundColor","blue");
        $(this).siblings('li').css("backgroundColor","aqua");
    });
    var $list4=$('#table4>li');
    console.log($list4);
    //将css作为对象，可以不加引号、批量修饰
    $list4.css({
    "height":"30px",
    "width":"50px",
    "backgroundColor":"wheat"
    });
    $list4.mouseover(function(){
        //获取当前li的索引值
        let index=$(this).index();
        $(this).css("backgroundColor","orange");
        // //图片路径随着当前li元素改变
        // $('#show div').eq(index).show();
        // //隐藏其他图片
        // $('#show div').eq(index).siblings('div').hide();
        //链式编程
        $('#show div').eq(index).show().siblings('div').hide();

    })
    $list4.mouseout(function(){
        $(this).css("backgroundColor","wheat");
    })
})
//$(function(){})相当于简写的$(document).ready(function(){}) 
//$(document).ready() 是 dom 结构绘制完毕后就执行，不必等到加载完毕。

//如果js文件存在对于某个dom元素的操作事件，并且这个js文件是在这个dom元素之前被解析
//如果不加$(window).load(function(){})，此时网页会因为找不到dom元素报错，而使用后可以避免


