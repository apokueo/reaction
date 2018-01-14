// Javascript has 7 data types:


// Boolean | true or false

let bool = true 


// Null type 

let anulltype = null 


// Undefined Type 

let undefiningtype = undefined 


// Number type 

let anum = 42 


// String type 

let astring = "This is a string" 


// Symbol type 
const symbol1 = Symbol(); 
const symbol2 = Symbol(42); 
const symbol3 = Symbol('boo'); 

console.log(typeof symbol); 

console.log(symbol3.toString());

console.log(Symbol('foo') === Symbol('foo')); 


class Array1 {
	static [Symbol.hasInstance](instance) {
		return Array.isArray(instance); 
	} 
}

console.log([] instanceof Array1); 
