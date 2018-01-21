function Hello(name) {

	// give them a private id 
	
	let id = Math.random(); 
	
	function upper(str) {
		return str.toUpperCase(); 
	} 

	function speak(lastname) {
		console.log( upper(name), lastname ); 
	}

	var public_api = {
		say: speak
	}; 

	return public_api; 
} 

var o = Hello('hoodie'); 

o.say("Solomon"); 

