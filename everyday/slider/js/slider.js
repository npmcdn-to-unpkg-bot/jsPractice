;(function(window, document){
	var sliderImg = document.getElementsByClassName("sliderImg"),
		sliderLeft = document.getElementById("sliderLeft"),
		sliderRight = document.getElementById("sliderRight"),
		sliderIndex = 0,
		_sliderNumber = 4,
		clearFlag = null;

	var changeIndex = function (number){
		sliderIndex = sliderIndex + number;
		clearTimeout(clearFlag);
		showSlider();
	}

	var showSlider = function(n){
		var length = sliderImg.length;

		if (sliderIndex > _sliderNumber){
			sliderIndex = 0;
		}
		else if (sliderIndex < 0){
			sliderIndex = _sliderNumber;
		}

		for (var i=0; i<length; i++){
			sliderImg[i].style.display = "none";
		}

		sliderImg[sliderIndex].style.display = "block";
		sliderIndex++

		clearFlag = setTimeout(showSlider, 2000);

	}

	showSlider();

	sliderLeft.addEventListener("click", function (){
		changeIndex(-2);
	});

	sliderRight.addEventListener("click",function (){
		changeIndex(0);
	});
})(window, document);