document.onclick=function(event){
	var x=event.pageX;
	var y=event.pageY;
	var p=document.querySelector("p");
	var width=p.clientWidth
	var height=p.clientHeight;
	p.style.top=(y-0.5*height)+"px";
	p.style.left=(x-0.5*width)+"px";
	console.log("x:"+x+",y:"+y);
	console.log(width,height);
}