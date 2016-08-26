let myPromise = function (time){
	return new Promise(function (resolve, reject){
		setTimeout(resolve, time, "succeed");
		setTimeout(reject, time, "failed");
	});
}

myPromise(3000)
	.then(function (info){
		console.log(info);
	},function (error){
		console.log(error);
	});