var game={
  SIZE:0,//保存pop小div的大小
  MAXTOP:0,//小pop可用的最大top值: innerHeight-SIZE-30
  MAXLEFT:0,//小pop可用的最大left值:innerWidth-SIZE
  init:function(){
    //获得id为pop的元素计算后的样式，再取height属性，转为浮点数，保存在SIZE中
    this.SIZE=parseFloat(getComputedStyle(pop).height);
    //计算MAXTOP=innerHeight-SIZE-30;
    this.MAXTOP=innerHeight-this.SIZE-30;
    //计算MAXLEFT=innerWidth-SIZE;
    this.MAXLEFT=innerWidth-this.SIZE;
  },
  start:function(){
    this.init();//初始化属性值
    //在0~MAXTOP之间随机生成top值
    var top=parseInt(Math.random()*this.MAXTOP);
    //在0~MAXLEFT之间随机生成left值
    var left=parseInt(Math.random()*this.MAXLEFT);
    //设置id为pop的元素的top为top
    pop.style.top=top+"px";
    //设置id为pop的元素的left为left
    pop.style.left=left+"px";
    //为pop绑定鼠标进入事件
    var me=this;//留住this
    pop.addEventListener("mouseover",function(e){
      //this->pop
      for(;;){
        var top=parseInt(Math.random()*me.MAXTOP);
        var left=parseInt(Math.random()*me.MAXLEFT);
        var x=e.clientX||e.x;
        var y=e.clientY||e.y;
        if(!(left<x&&x<left+me.SIZE
            &&top<y&&y<top+me.SIZE)){
          pop.style.top=top+"px";
          pop.style.left=left+"px";
          break;
        }
      }
    });
  }
}
window.onload=function(){
  game.start();
}