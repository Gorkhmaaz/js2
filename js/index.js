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

if (((year % 400 == 0) && (year % 4 == 0)) && (year % 100 != 0)) {
    alert('Right!');
} else {
    alert('Wrong!');
}


//////Task 5
let request = prompt('Введите пятиразрядное число')
if(request.length > 5){
    alert('Вы ввели не пятиразрядное число!')
} else if(request.charAt(0) === request.charAt(4) && request.charAt(1) === request.charAt(3)){
    alert('Число является палиндромом!')
} else {
    alert('Число не является пилиндромом')
}





////Task 6
const quantity = prompt('Enter a dollar')
const valute = prompt('Choose a valute ')
let eur = quantity * 0.93
let uan = quantity * 7.16
let azn = quantity * 1.7
if (valute === 'eur'){
    alert(eur)
} else if(valute === 'uan'){
    alert(uan)
} else if (valute === 'azn'){
    alert(azn)
} else {
    alert('Currently this value is not available')
}



////Task 7
const sum = Number(prompt('Enter the purchase amount:'))
let discount = 0.03;
let totalAmount = sum * (1 - discount)

if(sum >= 200 && sum <= 300){
    discount = 0.03
    alert("Cумма к оплате со скидкой: " + totalAmount + " руб.");
} else if(sum >= 300 &&  sum <= 500) {
    discount = 0.05
    alert("Cумма к оплате со скидкой: " + totalAmount + " руб.");
} else if(sum >= 500){
    discount = 0.07
    alert("Cумма к оплате со скидкой: " + totalAmount + " руб.");
} else {
    alert('You dont have a discount')
}


//////Task 8
let circleLength = parseInt(prompt('Enter length of circle'))
let squarePerimetr = parseInt(prompt('Enter perimetr of square'))

let radius = circleLength / (2 * Math.PI);
let side = squarePerimetr / 4

if(2 * radius <= side ){
    alert('Окружность помещается в квадрат')
} else {
    alert('Окружность не помещается в квадрат')
}


/////Task 9

let totalScore = 0;

// Первый вопрос
let userAnswer1 = prompt("Сколько футболистов играет на поле с команды ? \n a) 11 \n b) 12 \n c) 13").toLowerCase();

if (userAnswer1 === "a") {
  totalScore += 2;
}

// Второй вопрос
let userAnswer2 = prompt("Какой самый крупный океан? \n a) Тихий \n b) Атлантический \n c) Индийский").toLowerCase();

if (userAnswer2 === "a") {
  totalScore += 2;
}

// Третий вопрос
let userAnswer3 = prompt("Сколько хоккеистов играет на льду с команды? \n a) 5 \n b) 4 \n c) 6").toLowerCase();

if (userAnswer3 === "c") {
  totalScore += 2;
}

alert("Общее количество набранных баллов: " + totalScore);




/////Task 10












