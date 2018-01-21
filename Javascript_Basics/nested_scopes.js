function makeAdder(x) {
	// parameter x  is an inner variable - inner function add() uses x, so it has a closure over it
	
	function add(y) {
		return y + x; 

	}; 

	return add; 
} 

makeAdder(5); // a function will be returned 


var fn = makeAdder(5); 

fn(10)  // 15 

