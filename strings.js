// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
function characPosit(character){
	var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	// console.log(arr.length)
	for(var i = 0 ; i <=arr.length;i++){
		if(arr[i] == character){
			console.log("The position of alphabet" + character + " is " + (i+1));
		}
	}


}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'

function repeatStr (n, s) {
	var str = ""
	if(s <=0){
		console.log("The number must be positive")
	}
	for(var i = 0 ; i <s ; i++){

		str= str+n;

	}
	return str;


}