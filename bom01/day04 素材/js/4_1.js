//1. 任务: 每周期内执行一次计算距离放学的时间
function calc(){
  var over=new Date("2017/2/13 17:30:00");//下课时间
  var now=new Date();//当前时间
  //用over-now，再除1000，获得秒数差s
  var s=parseInt((over-now)/1000);
  if(s>0){
    //将描述差，换算成h，m，s
    var h=parseInt(s/3600);
    h<10&&(h="0"+h);//如果h<10,就在前补0
    var m=parseInt(s%3600/60);
    m<10&&(m="0"+m);//如果m<10,就在前补0
    var s=s%60;
    s<10&&(s="0"+s);//如果s<10,就在前补0
    //设置id为time的span的内容为h:m:s
    time.innerHTML=time.innerHTML.indexOf(":")==-1?
                                    h+":"+m+":"+s:
                                    h+" "+m+" "+s;
  }else{
    clearInterval(timer);
    timer=null;
    time.innerHTML="00:00:00";
  }
}
var timer=null;//保存当前正在运行的定时器序号，专用于停止
window.onload=function(){
  calc();
  //启动定时器：
  timer=setInterval(calc,500);
}
function stop(btn){
  if(timer!=null){//如果有定时器正在运行，就
    clearInterval(timer);//停止定时器
    timer=null;//清除timer
    btn.innerHTML="|>";
    time.innerHTML=time.innerHTML.replace(/\s+/g,":");
  }else{
    timer=setInterval(calc,500);//再次启动定时器
    btn.innerHTML="||";
  }
}