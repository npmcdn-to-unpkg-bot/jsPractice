
var start=new Date();
var fib=function(n){
		try {
			if(Math.round(n)!==n){
				throw  new Error("输入的不是整数");
			}
		} catch(e) {
			console.log(e);
		}
		return n<3?1:fib(n-1)+fib(n-2);
}
for(var i=0;i<=30;i++){
	var result=fib(i);
	var data={};
	data.result=result;
	data.time=(new Date().getTime()-start.getTime())/1000;
	data.kind="no memory";
	if(i===30){
		data.end=true;
	}
	postMessage(JSON.stringify(data));
}