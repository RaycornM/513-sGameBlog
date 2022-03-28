var z=document.querySelector(".z");
var r=document.querySelector(".r");
var bg=document.querySelector(".bg");
var banner=document.querySelector(".banner");
var t=1;

banner.onmouseover=function(){
	z.style.display="block";
	r.style.display="block";
}
banner.onmouseout=function(){
	z.style.display="none";
	r.style.display="none";
}
z.onclick=function(){
	t--;
	if(t==0){
		t=4
	}
	bg.src="img/b"+t+".jpg";
}

r.onclick=function(){
	t++;
	if(t==5){
		t=1
	}
	bg.src="img/b"+t+".jpg";
}
	var time=setInterval(function(){
		z.click();
	},2000);