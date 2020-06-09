//1 任务: 每隔一秒计算三个指针旋转的角度
function rotate(){
  var now=new Date();//获得当前时间，保存在now中
  var s=now.getSeconds();//获得now的s
  var sDeg=6*s;//求秒针旋转的角度sDeg
  var m=now.getMinutes();//获得now的m
  var mDeg=6*(m+s/60);//求分针旋转的角度mDeg
  var h=now.getHours();//获得now的h
  h>12&&(h-=12);//将h换算成12小时制
  var hDeg=(m/60+s/3600+h)*30;//求时针旋转的角度hDeg
  //找到id为s的div，设置其style中的transform属性为:
  document.getElementById("s").style.transform=
    "rotate("+sDeg+"deg)";
  //找到id为m的div，设置其style中的transform属性为:
  document.getElementById("m").style.transform=
    "rotate("+mDeg+"deg)";
  //找到id为h的div，设置其style中的transform属性为:
  document.getElementById("h").style.transform=
    "rotate("+hDeg+"deg)";
}
window.onload=function(){
  rotate();
  setInterval(rotate,1000);
