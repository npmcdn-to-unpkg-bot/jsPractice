// Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
var calCoin = function (money, coin){
	if (!Array.isArray(coin)){
		throw new Error("coin is not a array");
	}
	if (money < 0){
		throw new Error("money can not be negative");
	}
	if (money === 0){
		return [];
	}	
	else {
		if (money >= coin[0]){
			var left = coin[0];
			return [coin[0]].concat(calCoin(money - left,coin));
		}
		else {
			coin.shift();
			return calCoin(money, coin);
		}	
	}
		
}
console.log(calCoin(46, [25,10,5,1]));