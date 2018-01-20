// for loop 


a = [1,2,3,4,5]

b = [] 

console.log(typeof(b)) 


for (var item = 0; item < a.length; item++) {
	//console.log(item); 
	b.push(a[item]); 
	console.log(b); 
}; 

let spirits = [ 
	{name: 'king paimon', species: 'Nether' }, 
	{name: 'king bael', species: 'Uru' },
	{name: 'king zagan', species: 'Zunos' },
	{name: 'king paimon', species: 'Nether' }
]; 

var spiritus = spirits.filter(function(spirit) {
	return spirit.species === 'Nether'
}); 

console.log(spiritus); 
