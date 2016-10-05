(function ( $ ) {
	'use strict';

	$( function () {

		var calc = new Calculator( 'output' );
		calc.add( 4, 5 );
	} );

	var Calculator = function ( id ) {

		var container = document.getElementById( id );

		return {

			add: function ( x, y ) {
				var val = x + y;
				container.innerHTML = val;
			}
		};

	};

})( jQuery );
