'use strict';
var snake = function (n){
	var array = new Array(n),
	i = 0;
	var key = 1,
	start = 0,
	size = n - 1;
	for (i = 0; i < n; i++){
		array[i] = new Array(n);
	}
	var fill = function (){
		if (size === 0){
			array[start][start] = (key++).toString();
			console.log(array);
			return array;
		}
		if (array[start][start]){
			console.log(array[start][start]);
			return array;
		}
		for (i = start;i <= start +size -1;i++){
			array[start][i] = (key++).toString();
		}
		for (i = start; i <= start+ size -1; i++){
			array[i][start+size] = (key++).toString();
		}
		for (i = start+size; i>start; i--){
			array[start+size][i] = (key++).toString();
		}
		for (i = start + size; i > start; i--){
			array[i][start] = (key++).toString();
		}
		console.log(array);
		console.log("--------------------------------");
		size = size -2;
		start++;
		fill();
	}
	fill();
}
snake(5);