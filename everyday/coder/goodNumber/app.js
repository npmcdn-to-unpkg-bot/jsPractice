// qlcoder
// http://www.qlcoder.com/task/753f

let fs = require("fs"),
	myMap = new Map(),
	queryNumber = 0;
fs.readFile("data.txt", "utf8", function (err, data){
	if (err){
		console.err(err);
		return;
	}

	let array1 = data.split("\n");
	array1.forEach(function (v ,i){
		let array2 = v.split(" "),
			action = array2[0],
			num1 = parseInt(array2[1]),
			num2 = parseInt(array2[2]);
		if (action === "up"){
			if (myMap.has(num2)){
				myMap.set(num2,myMap.get(num2)+num1);
			}
			else {
				myMap.set(num2,num1);
			}
		}
		else if (action === "down"){
			if (myMap.has(num2)){
				let value = myMap.get(num2) - num1;
				if (value < 0){
					value = 0;
				}
				myMap.set(num2,value);
			}
			else{
				console.err("没有可供下架的商品");
			}
		}
		else if (action === "query"){
			let start = num1,
			end = num2,
			total = 0;
			for (let i = start; i <= end; i++){
				if (myMap.has(i)){
					total += myMap.get(i);
				}
			}
			queryNumber += total;
		}
	});
	console.log(queryNumber);

})
