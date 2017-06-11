



var board = [
	["x", "o", "x"], 
	["", "o", ""], 
	["", "", ""]
]; 


// Iterate through all elements in the board. 
// Look at each row, 
// ===> look at each item (column) in the row 
// ===> count how many empty slots we see 

function countEmptySlots(b, numRows, numCols) {

	var numEmptySlots = 0; 

	for (var i = 0; i < numRows; i++) {
		var curRow = board[i]; 
		for (var j = 0; j < numCols; j++) {
			//var curElement = board[i][j]; 
			var curElement = curRow[j]; 

			if (curElement == "") {
				numEmptySlots++; 
			}

		}
	}

	return numEmptySlots; 
}


console.log(countEmptySlots(board, 3, 3)); 

