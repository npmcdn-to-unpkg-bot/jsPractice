'use strict';
var row = 5,
	col =5,
	char = 97; 	// "a"

Number.prototype.convertToString = function (){
	return String.fromCharCode(this);
}

var convert = function (charCode){
	return Number.prototype.convertToString.call(charCode);
};

var print = function (r, c){
	var array = new Array(r);
	for(var j=0 ;j<array.length;j++){
		array[j] = new Array(c);
	}
	var fuck = function (start, row, col,char){
		var i;
		if (typeof array[start][start] !== 'undefined'){
			return;
		}

		for(i = 0;i<row;i++){
			array[start][start+i] = convert(char++);
		}
		for(i = 1 ; i<col; i++){
			array[start+i][start+col-1] = convert(char++);
		}
		for(i = start+col-2; i>=start; i--){
			array[start+row-1][i] = convert(char++);
		}
		for(i = start + row -2; i>start; i--){
			array[i][start] = convert(char++);
		}
		fuck(start+1,row-2,col-2,char);
	}
	fuck(0,r,c,char);

	console.log(array);
}
print(row,col);