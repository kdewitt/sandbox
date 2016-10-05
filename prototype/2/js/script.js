(function () {
	'use strict';

	var Calculator = function ( eq ) {

		this.eqCtl = document.getElementById( eq );
	};

	Calculator.prototype = {
		add: function ( x, y ) {

			var val = x + y;
			this.eqCtl.innerHTML = val;
		}
	};

	window.onload = function() {

		var calc = new Calculator( 'output' );
		calc.add( 5, 9 );

	};

})();
