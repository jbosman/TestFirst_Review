function createCalculator() {
	var calcObj = {};
	calcObj.total = 0;

	calcObj.value = function(){
		return this.total;
	}

	calcObj.add = function(num){
		this.total += num;
	}

	calcObj.subtract = function(num){
		this.total -= num;
	}

	return calcObj;
}