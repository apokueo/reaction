let languages = ['latin', 'creole', 'swahili', 'arabic']; 

console.log(languages.length); 

// Accessing indexes 

let languages = languages[0]; 

let languages = languages[languages.length - 1]; 

languages.forEach(function(item, index, array) {
	console.log(item, index); 
}); 


let pushit = languages.push('hebrew'); 

let popit = languages.pop(); 

let shiftit = languages.shift(); 

let unshiftit = languages.unshift('latin');

let pos = languages.indexOf('creole'); 

let removeit = languages.splice(pos, 1);

// Remove items from an index position 

let aethyr_tex = ['TAAOGBA', 'GEMNIMB', 'ADVORPT', 'DOXMAEL']; 
console.log(aethyr_tex); 

let pos = 1, n = 2; 

let removedItems = aethyr_tex.splice(pos, n); 

console.log(aethyr_tex); 
console.log(removedItems);


// Copy array 
var shallowCopy = aethyr_tex.slice();

// concat, copyWithin, entries, every, fill, filter, find, findIndex, forEach, includes, indexOf, join, keys, lastIndexOf, map, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toLocaleString, toSource, toString, unshift, values, [@@iterator], [@@species] 
