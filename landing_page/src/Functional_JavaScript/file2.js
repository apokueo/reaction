/* The logMultiples function logs the first logs the first ten multiples of the input to the console. Regardless of the size of num, however, only the first ten multiples will ever be logged.
  In other words, the runtime does not depend on the size of the input, and this function is also O(1).*/


function logMultiples(num) {
	for(i = 0; i < 10; i++) {
		console.log(i * num);
	}
}
var logMultiples(3);
