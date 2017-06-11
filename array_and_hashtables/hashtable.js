


// Pseudocode

// Given a key/value pair, insert it into the hash table. I should be able to lookup the key and get the value. 

/* 

 - HashTable object
 - stores an array (large array)
 - hash function ==> given a key "string", converts it to a numerical value, then modulo the value
 */


 function HashTable() {
 	this.vals = []; 


 	this.hash = function(key) {
 		for (var i = 0; i < key.length; i++) {
 			console.log("key at indx: " + key.charCodeAt(i)); 
 		}
 	}

 	// this.insert = function()
 }

 var myHashTable = new HashTable(); 

myHashTable.hash("hurrah"); 


