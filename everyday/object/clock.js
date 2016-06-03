'use strict';

Date.prototype.yyyymmdd = function (){
	var yyyymmdd = '';
	yyyymmdd += this.getFullYear();
	yyyymmdd += '-';
	if (this.getMonth()+1 >= 10){
		yyyymmdd += (this.getMonth() +1);
	}
	else {
		yyyymmdd += ('0' + (this.getMonth() + 1));
	}
	yyyymmdd += '-';
	if (this.getDate() >=0){
		yyyymmdd += this.getDate();
	}
	else {
		yyyymmdd += ('0' + this.getDate());
	}
	return yyyymmdd;
}

var clock = function(){
	var date = new Date();
	console.log(date);
	setTimeout(clock,1000);
}

clock();