// Working with High-order functions 


// According to this book -> Abstractions hide details and give us the ability to talk about problems at a higher (more abstract) level 

let total = 0, count  = 1; 

while (count <= 10) {
	total += count; 
	count += 1;
} 
console.log(total); 

console.log(sum(range(1, 10))); 


