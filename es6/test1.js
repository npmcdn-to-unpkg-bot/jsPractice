'use strict';
class Point{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	print(){
		console.log("("+this.x+","+this.y+")");
	}
}
var test=new Point(1,1);
test.print();
//类继承
class colorPoint extends Point{
	constructor(x,y,color){
		super(x,y);
		this.color=color;
	}
	print(){
		super.print();
		console.log("The color of the point is "+this.color);
	}
}
var testColor=new colorPoint(1,1,'red');
testColor.print();