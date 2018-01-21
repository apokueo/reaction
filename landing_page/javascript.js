var person {
  name: 'Nick',
  age: 27;
  details: {
    hobbies:['Tai Chi', 'Cooking'],
    location: 'USA'
  };
  greet: function() {
    console.log("Hello, I am!" + this.name);
  }
};

console.log(person.details);

person.greet() ;
// will trigger the function greet and print Hello in the console.

//You can use string as property names which allows for dashes like "first-name": 'Mac',

//console.log('first-name'); to log a string property

//this.name can refer to properties in an object where name is the property.

// Objects are reference types that store a pointer and not the actual value. Object properties might look the same but when applying comparison operator it will be false.

//3 ways to create objects
//~ Object initializers ~

  //1. var king = {
      //names: 'florintine'
//};

// ~ Constructor function ~

// fucntion King(name, age, sex){
    //this.name = name;
    //this.age = age;
    //this.sex = sex;
//};
//2. var kings = new Object("frank");

// ~ Object.create(Method)

//3. var animal1 = Object.create()
