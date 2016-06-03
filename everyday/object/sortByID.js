'use strict';

Array.prototype.sortByID = function(argument){
	this.sort(function(x,y){
		return x.libraryID > y.libraryID;
	});
};

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
console.log(library);
library.sortByID();
console.log(library);