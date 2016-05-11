var singleton = (function (){
	var instance;
	var init = function (){
		var privateVarible = "it's a private varible",
			privateRandomNumber = Math.random(),
			privateMethod = function (){
				console.log("it's a private method");
			};
		return {
			publicMethod: function (){
				console.log("it's a public method");
			},
			publicVarible: "it's a public varible",
			getRandomNumber: function (){
				return privateRandomNumber;
			}
		};
	};
	return {
		getInstance: function (){
			if (!instance){
				instance = init();
			}
			return instance;
		}
	}
})();                                                                                      