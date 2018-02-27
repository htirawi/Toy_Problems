// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

function accum(input){

	// var upper = [];
	// var splitIn = "";
	// for(var i = 0 ; i <input.length;i++){
	// 	splitIn = splitIn + input[i].concat("-")
	// 	upper.push(input.charAt(i).toUpperCase())
	// 	console.log(upper[i].concat(input.charAt(i)))
	// }
	// console.log(splitIn)

	// // console.log(upper)




	var acc = " "
	var splitIn = " ";
	var str = " "
	var arr = [];
	var fLetter = " "
	// debugger;
	for(var i = 0 ; i < input.length;i++){

		while(i<input.length){
			fLetter = input[i].toUpperCase();
			arr.push(fLetter)
			console.log(arr[i])
			// console.log(i,input.length)
			splitIn = splitIn + input[i].concat("-")
			str = splitIn.substring(0, splitIn.length-1)
			// console.log(str)
			i++;

		}


	}
	console.log(str);
	console.log(arr)



}