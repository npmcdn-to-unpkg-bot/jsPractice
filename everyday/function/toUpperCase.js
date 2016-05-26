// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
String.prototype.upWord = function (){
	var words = this.split(" ");
	var newWords = words.map(function(elem,index) {
		return (elem[0].toUpperCase() + elem.slice(1));
	})
	return newWords.join(" ");
}
var str = "the quick fox jump over the lazy dog";
console.log(str.upWord());