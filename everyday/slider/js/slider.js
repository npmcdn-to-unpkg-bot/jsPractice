;(function(window, document){
	var sliderImg = document.getElementsByClassName("sliderImg"),
		sliderIndex = 0,
		_sliderNumber = 4;

	var showSlider = function(){
		if (sliderIndex > _sliderNumber || sliderIndex < 0 ){
			sliderIndex = 0;
		}

		if (sliderIndex === 0){
			sliderImg[_sliderNumber].style.display = "none";
		}
		else {
			sliderImg[sliderIndex -1].style.display = "none";
		}

		sliderImg[sliderIndex].style.display = "block";
		sliderIndex++

		setTimeout(showSlider, 2000);

	}

	showSlider();
})(window, document);