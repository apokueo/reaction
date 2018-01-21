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

// Closure first showed up in Lisp | read: Clojure
/* everything you will design in an application is a 'module': Authentication, UI, UX | we do NOT have classes in Javascript, we have this and Objects | prototypes*/ 
