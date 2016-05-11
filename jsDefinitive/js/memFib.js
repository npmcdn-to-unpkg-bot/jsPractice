var start=new Date();
var memFib=function(){
		var mem=[1,1];
		var fib=function(n){
			try {
				if(Math.round(n)!==n){
					throw  new Error("输入的不是整数");
				}
			} catch(e) {
				console.log(e);
			}
			var result;
			if(n<=mem.length){
				result=mem[n-1];
			}
			else{
				result=fib(n-1)+fib(n-2);
				mem[n-1]=result;
			}
			return result;
		}
		return fib;
}
for(var i=0;i<=30;i++){
	var result=memFib()(i);
	var data={};
	data.result=result;
	data.time=(new Date().getTime()-start.getTime())/1000;
	data.kind="use memory";
	if(i===30){
		data.end=true;
	}
	postMessage(JSON.stringify(data));
}