// Working with High-order functions 


// According to this book -> Abstractions hide details and give us the ability to talk about problems at a higher (more abstract) level 



// the way 1 
let total = 0, count  = 1; 

while (count <= 10) {
	total += count; 
	count += 1;
} 
console.log(total); 


// the way 2 
console.log(sum(range(1, 10))); 



// High order functions that operate on other functions, either by taking them as arguments or by returning them
// Higher order functions allow us to abstract over actions, not just values 
// functions that create new functions, that change other functions, that provide new types of control flow

function greaterThan(n) {
	return function(m) { return m > n; }; 
}

let greaterThan10 = greaterThan(10); 
console.log(greaterThan10(11)); // true 



// Change 

function noisy(f) {
	return function(arg) {
		console.log("calling with", arg); 
		let val = f(arg); 
		console.log("called with", arg, "- got", val); 
		return val; 
	}; 
}

noisy(Boolean)(0); // calling with 0, called with 0 - got false 



// Control Flow

function unless(test, then) {
	if (!test) then(); 
} 

function repeat(times, body) {
	for (let i = 0; i < times; i++) body(i); 
} 

repeat(3, function(n) {
	unless(n % 2, function() {
		console.log(n, "is even"); 
	}); 
}); // 0 is even, 2 is even 


// Apply = apply() calls a function with an array as arguments 

let val = f.apply(null, arguments); 
