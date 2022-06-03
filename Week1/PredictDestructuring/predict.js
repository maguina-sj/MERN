const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// PREDICTION: console.log(randomCar) will output Tesla and (otherRandomCar) will output Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);

// PREDICTION: console.log(name) will output an error or null and (otherName) will output Elon (once the other log is commented out or gone)

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// PREDICTION: console.log(password) will output 12345 and (hashedPassword) will output an error or not defined 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//PREDICTION: console.log(first==second) will output false and (first==third) will output true 

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//PREDICTION: console.log(key) will output value, (secondKey) will output the array;(secondKey[0]) will output 1 and (willThisWork) will not work since it needs to go inside the dictionary first, then the array (whoops my last prediction was wrong...it worked)