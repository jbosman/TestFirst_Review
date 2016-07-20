function RPNCalculator() {
	this.stackArray = [];
}

RPNCalculator.prototype.push = function(num){
	this.stackArray.push(num);
}

RPNCalculator.prototype.pop = function(){
	if( this.stackArray.length < 1 )
		throw "rpnCalculator is empty"
	else
		return this.stackArray.pop();
}

RPNCalculator.prototype.value = function(num){
	return this.stackArray[this.stackArray.length - 1];
}

RPNCalculator.prototype.plus = function(){
	var num1 = this.pop();
	var num2 = this.pop();
	this.push(num1 + num2);
}

RPNCalculator.prototype.minus = function(){
	var num1 = this.pop();
	var num2 = this.pop();
	this.push(num2 - num1);
}

RPNCalculator.prototype.divide = function(){
	var num1 = this.pop();
	var num2 = this.pop();
	this.push(num2 / num1);
}

RPNCalculator.prototype.times = function(){
	var num1 = this.pop();
	var num2 = this.pop();
	this.push(num2 * num1);
}





