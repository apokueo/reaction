// Callbacks 

function boast() {
	console.log("Hello, Aeon");
} 

setTimeout( boast, 1000 ); 


// Ajax takes 2 parameteres - first it expects a url then a function 

function resp(content) {
	console.log( content ); 

} 

ajax( "http://someurl", resp ); 

// this is asynchronous programming
