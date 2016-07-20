
function repeat( str, times ){
	var rtrnString = "";

	for( var i = 0; i < times; i++ ){
		rtrnString += str;
	}

	return rtrnString;
}

function sum(array) {
	var total = 0;
	for( var i = 0; i < array.length; i++ ){
		total += array[i];
	}
	return total;
}

function gridGenerator(num) {
	var grid = "";
	var toPound = true;

	for( var i = 0; i < num; i++ ){
		if( i % 2 )
			toPound = false;
		for( var j = 0; j < num; j++ ){
			if(toPound) {
				grid += "#";
				toPound = false;
			}
			else {
				grid += " ";
				toPound = true;
			}
		}
		grid += "\n";
	}

	return grid;
}

function join(array, deliminator = ""){
	
	var rtrnString = "";

	for(var i = 0; i < array.length; i++ ){
		rtrnString += array[i] + deliminator;
	}

	if( deliminator !== "" )
		return rtrnString.slice(0, -1);
	else
		return rtrnString;

}

function paramify(obj) {
	var rtrnString = "";

	var objKeys = Object.keys(obj).sort();

	for( var index in objKeys ){
		if( obj.hasOwnProperty(objKeys[index]) )
			rtrnString += objKeys[index]+ "=" + obj[objKeys[index]] + "&";
	}

	return rtrnString.slice(0, -1);

}