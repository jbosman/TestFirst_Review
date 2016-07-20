function doubler(num) {
	return num * 2;
}

function map( array, func ){
	for( var i = 0; i < array.length; i++){
		array[i] = func(array[i]);
	}

	return array;
}

function filter( array, func ) {
	var newArray = [];

	for( var i = 0; i < array.length; i++){
		if( func( array[i]) )
			newArray.push( array[i] );
	}

	return newArray;
}

function contains( collection, item ) {
	var doesContain = false;

	for( var key in collection ){
		if( collection[key] === item)
			doesContain = true;
	}

	return doesContain;
}

function countWords(string) {
	return string.split(" ").length;
}

function countWordsInReduce(sum, nextString){
	return sum + countWords(nextString);
}

function reduce( collection, start, func) {
	var initial = start;
	
	for( var item in collection)
		initial = func( initial, collection[item]);

	return initial;
}

function add(a,b){ return a + b; }

function sum( array ) {
	return reduce( array, 0, add);
}

function AND( a, b) { return a && b; }
function OR( a, b) { return a || b; }

function every( array, func ){
	return reduce( map(array, func), true, AND ); 
}

function any( array, func ){
	return reduce( map(array, func), false, OR );
}







