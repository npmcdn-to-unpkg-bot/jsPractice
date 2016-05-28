 // Write a JavaScript function to  get the number of occurrences of each letter in specified string
 var calLetterOccur = function (words){
 	words = words.split("");
 	var letterMap = new Map();
 	words.forEach( function(element, index) {
 		// statements
 		if (letterMap.has(element)){
 			letterMap.set(element,letterMap.get(element)+1);
 		}
 		else {
 			letterMap.set(element,1);
 		}
 	});
 	return letterMap;
 }
 console.log(calLetterOccur("hello,world"));	