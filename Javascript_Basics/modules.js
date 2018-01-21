// closure is created when you see a function sitting inside a function 

function Hello(name) { 
	
	function speak() {
		console.log(name); 
	} 

	return {
		speak; 
	} 

	// Apis are simply returned objects objs
	return {
		speak: speak
	}; 

	return {
		say: speak
	}; 
} 

var fn = Hello("Larry"); 

fn();  // Larry 

var o = Hello("Lawrence") 
o.say("Solomon"); 
o.speak("Public Api"); 
