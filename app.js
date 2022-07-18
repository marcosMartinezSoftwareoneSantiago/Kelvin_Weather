const kelvin = 293;
//kelvin was defined as a constant with value 293
var celsius = kelvin - 273;
//celsius variable is the result of kelvin minus celsius
var fahrenheit = celsius *(9 / 5) + 32;
//The obtention of fahrenheit was ussing the needed equation
fahrenheit = Math.floor(fahrenheit);
//To round down the value of fahrenheit I use the method floor from the class Math
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
var Newton = Math.floor(celsius *(33/100));
console.log(`The temperature is ${Newton} degrees Fahrenheit`);