const currentYear = new Date().getFullYear();
const numberOfYears = 5;

Array.from("web"); 
Array.from(Array(numberOfYears), (v, i) => currentYear + i);
