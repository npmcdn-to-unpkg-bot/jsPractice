'use strict';
Array.prototype.bubble = function (){
	var i = this.length,
		tem,
		j;

	while (i>0){
		for (j=0; j < i -1; j++ ){
			if (this[j] > this[j+1]){
				tem = this[j];
				this[j] = this[j+1];
				this[j+1] = tem;
			}
		}
		i--;
	}
	console.log(this);
}
var array = [5,4,3,8,2];
array.bubble();