function nonClosure() {
	"use strict";

	var date = new Date();

	return date.getMilliseconds();

}

var output = document.getElementById( 'output' ),
    nonC   = nonClosure();

output.innerHTML = nonC + '<br />';

window.setTimeout( function () {
	"use strict";

	output.innerHTML += '<br />' + nonClosure();

}, 500 );

function myClosure() {
	"use strict";

	var date2 = new Date();

	return function () {
		return date2.getMilliseconds();
	};

}

var closure = myClosure();
var output2 = document.getElementById( 'output2' );

output2.innerHTML = closure();

window.setTimeout( function () {
	"use strict";

	output2.innerHTML += '<br />' + closure();

}, 500 );