function getFocus(txt){
	txt.className="txt_focus";
	txt.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
function valiName(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\w{1,10}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiPwd(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\d{6}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiAll(e){//验证所有
  //this->form1
  var rName=valiName(this.username);
  var rPwd=valiPwd(this.pwd);
  if(!(rName&&rPwd)){//如果验证结果不全为true
    e.preventDefault();//就取消事件
  }
}
window.onload=function(){
  form1.addEventListener("submit",valiAll);
}