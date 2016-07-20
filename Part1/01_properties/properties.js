function setPropertiesOnObjLiteral(obj) {
	obj.x = 7;
	obj.y = 8;
	obj.onePlus = function(num) {
		return num + 1;
	}
}

function setPropertiesOnArrayObj(arrayObj) {
	arrayObj.hello = function() {
		return "Hello!";
	}
	arrayObj.full = "stack";
	arrayObj[0] = 5;
	arrayObj.twoTimes = function(num) {
		return num * 2;
	}
}

function setPropertiesOnFunctionObj( funcObj ) {
	funcObj.year = 2015;
	funcObj.divideByTwo = function(num) {
		return num / 2;
	}

	funcObj.prototype.helloWorld = function() {
		return "Hello World";
	}
}



