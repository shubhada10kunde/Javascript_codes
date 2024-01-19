console.log('Hello World');

//variable declaration
let Myname = 'shubhu'; // string literal
console.log(Myname);

//constant var declaration
const InterestRate = 0.3;
// Interestrate =1; // we cant reassign a constant if we want to reassign use let
console.log(InterestRate);

// ** primitive value ** type which we can assign to variable
let name ='shubhada'; //string 
let age = 24; //number
let IsApproved = false; //boolean
let FirstName = undefined ; // undefined
let SelectedColor = null; //null

// ** Reference type value **
// Object
let person = {
    name:'shubh',
    age:25
};
console.log(person); 

//or dot notation
person.name= 'kunde';
console.log(person.name);

//or bracket notation 
let Selection = 'name';
person[Selection] = 'sk';
console.log(person.name);


// ** ARRAYS **

let SelectedColors = ['red' , 'pink'];
console.log(SelectedColors);

// if we want to access the perticular element/s in array we will use index to access that element 
console.log(SelectedColors[0]);

SelectedColors[2] = 'blue';
console.log(SelectedColors);

//to return no of elements in array
console.log(SelectedColors.length);


// ** FUNCTIONS **

// function declaration
function greet() {
    console.log('hello shubhu');
}
// calling a function
greet();

//function with parameters
function greet(name) {
    console.log('hello ' +  name);
}
greet('kunde');

//function with multiple parameters
function greet(name,LastName)
{
    console.log('hello ' + name + '' + LastName);
}
greet('shubh ' , 'kunde');

//calculating a value
function square(number) {
    return number * number;
}
let number = square(4);
console.log(number);

//we can exclude variable declaration and can directly pass function
console.log(square(2));