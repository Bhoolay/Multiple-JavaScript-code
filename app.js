
// Which number is Greater in two prompt

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

if (num1 > num2) {
    console.log("First number is Greater than Second number:", num1);
} else {
    console.log("Second number is Greater than First number:", num2);
}

// Which number is Positive or negative

let num = +prompt("Enter a number, positive or negative");

if (num >= 0) {
    console.log("Number is positive:", num);
} else {
    console.log("Number is negative:", num);
}

// Which number is Largest in 5 prompt 

let numA = +prompt("Enter 1st number I'll give you the largest number");
let numB = +prompt("Enter 2nd number I'll give you the largest number");
let numC = +prompt("Enter 3rd number I'll give you the largest number");
let numD = +prompt("Enter 4th number I'll give you the largest number");
let numE = +prompt("Enter 5th number I'll give you the largest number");

let max;

if (numA > numB && numA > numC && numA > numD && numA > numE) {
    max = numA;
} else if (numB > numA && numB > numC && numB > numD && numB > numE) {
    max = numB;
} else if (numC > numA && numC > numB && numC > numD && numC > numE) {
    max = numC;
} else if (numD > numA && numD > numB && numD > numC && numD > numE) {
    max = numD;
} else {
    max = numE;
}

console.log("The largest number is:", max);

// Which number is +ve or -ve B/W and Equal 15

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// What's your Percentage

let grade = +prompt("Enter your percentage");

if (grade >= 90 && grade <= 100) {
    grade = "A";
} else if (grade >= 80 && grade <= 89) {
    grade = "B";
} else if (grade >= 60 && grade <= 79) {
    grade = "C";
} else if (grade > 100 || grade < 0) {
    alert("Incorrect");
} else {
    grade = "F";
}

console.log("Grade:", grade);

// Which number is multiple of 3 and 5

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Nice pattern

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
