	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		var newString = " "
		for(var i = 0 ; i <input.length;i++){
			if(input.charAt(i) === input.charAt(i).toUpperCase()){
				newString += input.charAt(i).toLowerCase();
			}
			else{
				newString+= input.charAt(i).toUpperCase();

			}
		}
		return newString;
	}