var adv={
  HEIGHT:0,//保存msg的高度，充当移动的总距离
  TIME:2000,//总时间
  STEPS:50,//总步数
  interval:0,//每步时间间隔
  step:0,//每步步长
  WAIT:5000,//下移停止后，等待上移的时间
  timer:null,//保存当前定时器的序号
  init:function(){
    //获得msg计算后的样式中的height，保存在HEIGHT中
    this.HEIGHT=parseFloat(getComputedStyle(msg).height);
    //计算每步时间间隔: TIME/STEPS，保存在interval中
    this.interval=this.TIME/this.STEPS;
    //计算每步步长: HEIGHT/STEPS，保存在step中
    this.step=this.HEIGHT/this.STEPS;
  },
  start:function(){//页面加载后启动第一次上移
    //this->adv
    this.init();
    this.moveUp();
  },
  moveUp:function(){//启动上移
    //this->adv
    //启动一次性定时器,每隔interva，执行一次moveUpStep
    this.timer=setTimeout(
      this.moveUpStep.bind(this),this.interval);
  },
  moveUpStep:function(){//任务: 上移一步
    //this->adv
    //获得msg现在的bottom?
    var bottom=parseFloat(getComputedStyle(msg).bottom);
    bottom+=this.step;//将bottom值+step
    msg.style.bottom=bottom+"px";//将bottom值设置回msg上
    if(bottom<=0){//如果bottom<=0
      this.timer=setTimeout(//再次启动一次性定时器
        this.moveUpStep.bind(this),this.interval);
    }else{//一次性定时器中即使任务结束，也要清空timer
      this.timer=null;
    }
  },
  moveDownStep:function(){
    //获得msg现在的bottom?
    //将bottom值-step
    //将bottom值设置回msg上
    //如果bottom>-Height
      //再次启动一次性定时器
    //否则
      //再启动一次性定时器，传入moveUp，提前绑定this，设置等待时间为WAIT
  },
  moveDown:function(){//启动下移
    //如果timer等于null
      //启动一次性定时器,每隔interva，执行一次moveDownStep
  }
}
window.onload=function(){
  adv.start();//this->adv
}