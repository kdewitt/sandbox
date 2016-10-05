(function ( $ ) {
	'use strict';

	var calculator;

	$( function () {

		calculator = function ( id ) {

			var container = document.getElementById( id ),
			    add       = function ( x, y ) {
				    var val = x + y;
				    container.innerHTML = val;
			    },
			    subtract  = function ( x, y ) {
				    var val2 = x - y;
				    console.log( val2 );
			    };

			return {
				add: add,
				sub: subtract
			};

		}( 'output' );

		calculator.add( 2, 8 );
		calculator.sub( 2, 8 );

	} );

})( jQuery );
