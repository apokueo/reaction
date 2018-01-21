// make sure you understand closures -> modules is how you design software (closures) | lambda calculus (closure - concepts) 
function Hello(name) {

	function speak(lastname) {
		console.log(name, lastname); 
	} 

	return {
		say: speak, 
		name: name
	} 


	function changeName(newName) {
		name = newName; 
	} 

	return {
		say: speak, 
		changeName: changeName, 
		name: name
	}; 
} 

var o = Hello("Larry"); 
o.changeName("Larrrry"); 
o.name;
o.firstName(); 
o.say("Howdy");

// Unit testing does not mean that you have to test everything -> dependency injection scenario 
