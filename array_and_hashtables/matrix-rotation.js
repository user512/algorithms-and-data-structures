



/* Pseudocode

- Iterate through all elements.  
	- If element is 0
    	- add the row index to an array "rowsToZeroOut"
    	- add col index to an array "colsToZeroOut"


- For each row in "rowsToZeroOut", Make that row all 0's
- For each col in "colsToZeroOut", Make that col all 0's

*/


function makeZeroMatrix(matrix, numRows, numCols) {
	var rowsToZeroOut = []; 
	var colsToZeroOut = []; 

	for (var i = 0; i < numRows; i++) {
		for (var j = 0; j < numCols; j++) {
			//console.log(matrix[i][j]); 

			if (matrix[i][j] == 0) {
				rowsToZeroOut.push(i); 
				colsToZeroOut.push(j); 
			}
		}
	}


	// For each row in "rowsToZeroOut", Make that row all 0's
	for  (var i = 0; i < rowsToZeroOut.length; i++) {
		zeroOutRow(matrix, rowsToZeroOut[i]); 
	}


	// For each col in "colsToZeroOut", Make that col all 0's
	for  (var i = 0; i < colsToZeroOut.length; i++) {
		zeroOutCol(matrix, colsToZeroOut[i])
	}


}


function zeroOutRow(matrix, rowIndex) {

	var row = matrix[rowIndex]; 

	for (var i = 0; i < row.length; i++) {
		matrix[rowIndex][i] = 0; 
	}
}



function zeroOutCol(matrix, colIndex) {

	for (var i = 0; i < matrix.length; i++) {
		matrix[i][colIndex] = 0; 
	}
}




var matrix = [
	[2, 0, 5], 
	[6, 7, 0], 
	[1, 3, 3]
]	


makeZeroMatrix(matrix, 2, 3); 

console.log(matrix); 




