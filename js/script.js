(function () {
	'use strict';

	var output  = document.getElementById( 'output' ),
	    closure = new myClosure2();

	output.innerHTML = closure.foo();

	window.setTimeout( function () {
		output.innerHTML += '<br />' + closure.foo();
	}, 500 );

})();

function nonClosure() {

	var date = new Date();
	return date.getMilliseconds();
}

function myClosure() {

	var date = new Date();

	return function () {

		return date.getMilliseconds();

	};
}

function myClosure2() {

	var date = new Date(),
	    nestedFunc;

	nestedFunc = function () {

		return date.getMilliseconds();
	};

	return {
		foo: nestedFunc
	};
}