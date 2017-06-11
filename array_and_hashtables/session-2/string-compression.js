



/* Pseudocode
* Iterate through the string
* track the current letter, curLetter
* initialize a count to 1
* Iterate through next letters, keep adding to count for each letter that you see. 
* If you encounte a different letter, then add the letter + count to the compressed string
* Reset the curLetter to the next letter and reset count to 1
* Compare the compressed string to the original, return the shorter one. 
*/

function compressString(str)  {

	var curLetter = str[0]; 
	var letterCount = 0; 
	var compressedStr = ""; 

	for (var i = 1; i < str.length; i++) {
		if (str[i] === curLetter) {
			letterCount++; 
		} else {
			compressedStr += curLetter; 
			compressedStr += letterCount; 
			curLetter = str[i]; 
			letterCount = 1; 
		}
	}

	return compressedStr.length < str.length ? compressedStr : str; 
}

var compressedStr = compressString("abcd"); 
console.log(compressedStr); 


