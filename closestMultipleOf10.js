 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
	function closestMultipleOf10(num) {
		var modu = num%10;
		if(modu<5){
			return(num-modu);
		}
		else{
			return(Math.ceil(num/10)*10)
		}
	}