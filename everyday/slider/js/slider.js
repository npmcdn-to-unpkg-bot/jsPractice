;(function(window, document){
	var sliderImg = document.getElementsByClassName("sliderImg"),
		sliderLeft = document.getElementById("sliderLeft"),
		sliderRight = document.getElementById("sliderRight"),
		sliderIndex = 0,
		_sliderNumber = 4,
		clearFlag = null;

	var showSlider = function(n){
		var length = sliderImg.length;
		if (n === 1){
			clearTimeout(clearFlag);
			showSlider();
			return;
		}
		else if (n === -1){
			clearTimeout(clearFlag);
			sliderIndex = sliderIndex - 2;
			showSlider();
			return;
		}

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
		showSlider(-1);
	});

	sliderRight.addEventListener("click",function (){
		showSlider(1);
	});
})(window, document);