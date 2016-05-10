'use strict';
function timeout(ms){
	return new Promise(function(reslove,reject){
		setTimeout(reject, ms);
	});
}
timeout(3000).then(
	function(){
		console.log("done");
	},//success
	function(){
		console.log(a);
		console.log("failed");
	}//failure
);