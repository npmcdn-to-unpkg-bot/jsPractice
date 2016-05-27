 // Write a JavaScript function to find the first not repeated character
//  Sample arguments : 'abacddbec' 
// Expected output : 'e' 
String.prototype.firstRepeatLetter = function (){
	var letters = this.split("");
	var letterSet = new Set();
	letters.some( function(element, index) {
		// statements
		if ( !letterSet.has(element) ){
			letterSet.add(element);
		}
		else{
			console.log(element);
			return false;
		}
	});
}
"fuck you".firstRepeatLetter();
