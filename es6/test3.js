// 'use strict';
var test=function(){
	this.a=1;
	this.b=2;
	this.get=function(){
		console.log(this.a);
		console.log(this.b);
	};
	this.set=function(a,b){
		this.a=a;
		this.b=b;
	};
}
var a=new test();
a.set(2,3);
console.log(typeof a);
console.log(a);