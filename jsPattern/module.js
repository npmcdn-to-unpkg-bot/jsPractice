var module = (function (){
	var basket = [];
	var judge =function ( item ){
		return (item.name && typeof item.price === "number")
	}
	return {
		add: function ( item ){
			if ( judge( item ) ){
				basket.push( item );
			}
			else{
				throw new Error("wrong item constructure");
			} 
		},
		remove: function ( item ){
			var index = basket.indexOf( item );
			if ( index<0 ){
				throw new Error( item+" is not in basket");
			}
			basket.splice( index, 1);
		},
		empty: function (){
			basket.length = 0;
		},
		show: function (){
			console.log( basket);
		},
		has: function ( item ){
			return basket.contains(item);
		}
		getTotal: function (){
			var total = 0;
			basket.forEach( function ( v, i ){
				total+=v.price;
			} );
			return total;
		}
	}
})();