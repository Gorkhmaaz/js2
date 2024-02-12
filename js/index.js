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



let num = prompt('Enter the number from 100 to 999');
    num = num + '';
    if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2])
    {
        alert('TRUE');
    }
    else
        alert('FALSE');





        


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




let year = prompt('Enter a year');

if(((year % 400 == 0) && (year % 4 == 0)) || (year % 100 != 0)){
    alert('Yes!');
} else {
    alert('No!');
}











