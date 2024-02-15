/////////Task 1
let age = prompt("Enter your age :");

if (age >= 0 && age <= 2) {
    alert("You are a child");
} else if (age >= 12 && age <= 18) {
    alert("You are a teenager");
} else if (age > 18 && age < 60) {
    alert("You are an adult");
} else if (age >= 60) {
    alert("You are a pensioner");
} else {
    alert("Incorrect age");
}




/////Task 2
let numbers = prompt('Enter a number from 0 to 9 :');

if (numbers == 0) {
    alert(')')
} else if (numbers == 1) {
    alert('!')
} else if (numbers == 2) {
    alert('@')
} else if (numbers == 3) {
    alert('#')
} else if (numbers == 4) {
    alert('$')
} else if (numbers == 5) {
    alert('%')
} else if (numbers == 6) {
    alert('^')
} else if (numbers == 7) {
    alert('&')
} else if (numbers == 8) {
    alert('*')
} else if (numbers == 9) {
    alert('(')
} else {
    alert('Incorrect number!')
}





//////Task 3 

const userNum = prompt('Enter a three-digit number')
const num = parseInt(userNum);
if (isNaN(num) && userNum.length === 3) {
    const digit1 = Math.floor(num / 100);
    const digit2 = Math.floor((num % 100) / 10);
    const digit3 = num % 10;

    if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
        alert('There are identical numbers ')
    } else {
        alert("There aren't identical numbers ")
    }
} else {
    alert('Enter a three digit number')
}













//////Task 4
let year = prompt('Enter a year');

if (((year % 400 == 0) && (year % 4 == 0)) || (year % 100 != 0)) {
    alert('Yes!');
} else {
    alert('No!');
}











