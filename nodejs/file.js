
// find the max files in a folder
var fs = require("fs");

var _max = 0,
filePath;
var walk = function(dir) {
	var list = fs.readdirSync(dir)
	list.forEach(function(file) {
		file = dir + '/' + file
		var stat = fs.statSync(file)
		if (stat && stat.isDirectory()){
			walk(file);	
		} 
		else{
			if (stat.size > _max){
				_max = stat.size;
				console.log(stat.size);
				filePath = file;
			}
		} 
	})
}

walk("./root");
console.log(filePath);
fs.readFile(filePath,"utf8",function (err,data){
	console.log(data);
})
