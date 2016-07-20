// Functions.js
function concatString() {
	return Array.from(arguments).join("");
}

function yourFunctionRunner() {
	var rtnString = "";

	for(var i = 0; i < arguments.length; i++){
		rtnString += arguments[i].call();
	}

	return rtnString;
}

function makeAdder(num) {
	var total = num;

	function addToTotal(num) {
		total += num;
		return total;
	}

	return addToTotal;
}

function once(func){
	var hasBeenCalled = false;

	function onceFuncOnce() {
		if(!hasBeenCalled){
			hasBeenCalled = true;
			func.call();
		}
	}

	return onceFuncOnce;
}

function createObjectWithClosures() {
	var obj = {};
	var value = 0;

	obj.oneIncrementer = function() {
		value++;
	}

	obj.tensIncrementer = function() {
		value += 10;
	}

	obj.getValue = function() {
		return value;
	}

	return obj;
}




