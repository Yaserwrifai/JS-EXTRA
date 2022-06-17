/*-

Extra: Function exercises
Exercise 1
Write a JavaScript function that returns nothing and has no parameters. This function should print the result of the multiplication of two numbers (the numbers that you want).
-*/
console.log("----------------------------------------------------");
console.log(" Extra ex1");

function multiplication2numbers() {

    var result = document.getElementById("EX1").innerHTML = "EX 1 : Result on Consol";
    console.log(" 3 * 5  = ", 3 * 5)

}
multiplication2numbers();

/*-Exercise 2
Write a JavaScript function with no parameters. This function should return the result of the multiplication of two numbers (the numbers that you want), and in your main program, you should print the result.

Tip: if a function returns something, you can assign the function call to a variable. In this way, the value of the return will be held by this variable.-*/
console.log("----------------------------------------------------");
console.log(" Extra ex2");

var xMALy = function multiplication2numbers2() {

    var result = document.getElementById("EX2").innerHTML = "EX2 : The result of the multiplication of two numbers  3 * 5  = " + (3 * 5);
    console.log(result);
    return result;

}
xMALy();

/*-
Exercise 3
Write a JavaScript function with two parameters. These parameters are the numbers that have to be multiplied. The function should return the result of the multiplication of both numbers (the numbers that you want), and in your main program, you should print the result. Test the function with 3 examples.
-*/
console.log("----------------------------------------------------");
console.log(" Extra ex3");

function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;

}


/*-Exercise 4
Write a function that determines the type of a triangle given the length of its three
 sides.
-*/
console.log("----------------------------------------------------");
console.log(" Extra ex4");
// Function to find the type of
// triangle with the help of sides
function checkTypeOfTriangle(a, b, c) {

    let sqa = Math.floor(Math.pow(a, 2));
    let sqb = Math.floor(Math.pow(b, 2));
    let sqc = Math.floor(Math.pow(c, 2));

    if (sqa == sqc + sqb ||
        sqb == sqa + sqc ||
        sqc == sqa + sqb) {
        document.getElementById("tr").innerHTML = " EX4 : Right-angled Triangle";
    } else if (sqa > sqc + sqb ||
        sqb > sqa + sqc ||
        sqc > sqa + sqb) {
        document.getElementById("tr").innerHTML = "Obtuse-angled Triangle";
    } else {
        document.getElementById("tr").innerHTML = "EX 4 : Acute-angled Triangle";
    }
}

// Driver Code
let a, b, c;
a = 5;
b = 3;
c = 4;

// Function Call
checkTypeOfTriangle(a, b, c);
/*-
Exercise 5
Write a function that receives as a parameter an array of characters 
and replaces all "a" by "1". e.g.: JavaScript will become J1v1Script.
-*/
console.log("----------------------------------------------------");
console.log(" Extra ex5");

function replaceCH(myStr) {

    var newStr = myStr.replace(/a/g, '1');

    console.log("replace a in " + myStr + " will become " + newStr); // J1v1Script
}

var arr = 'yaser yaser aaa';
replaceCH(arr);
/*-
Exercise 6
Write two functions. The first one should return the sum of all the elements of an array and the second one should return the smallest number in the array. Print the result in the main program.
-*/
console.log("----------------------------------------------------");
console.log(" Extra ex 6");

function sumA(arr) {

    return arr.reduce((a, b) => a + b, 0)
}
var arr = [2, 4, 6, 10, 1, -1]
document.getElementById("ex6").innerHTML = "EX6 : sum of all the elements of  [" + arr + "] is " + sumA(arr);

function smallNumArry(arr) {
    var smallest = arr.sort((a, b) => a - b);
    return (smallest[0]);
}

document.getElementById("ex6-2").innerHTML = "EX6 : the smallest number in the array  [" + arr + "] is " + smallNumArry(arr);

/*-
Exercise 7
Write a function that adds the even numbers of an array. For example, the array: 1 2 8 3 2 would result in the sum of 2 + 8 + 2, since they are even numbers. Return the result and print it in the main program.
-*/
console.log("----------------------------------------------------");
console.log(" Extra ex 7");
let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
x = [];
const sumEvens = (numStr) => {
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] % 2 === 0) {
            x += "[" + numStr[i] + "],";
            sum = sum + numStr[i];
        }
    }
    return sum;
}

console.log("the sum of even numbers  in the array: " + numStr + "  is = " + sumEvens(numStr));
document.getElementById("ex7").innerHTML = "the sum of even numbers  in the array: " + numStr + "  is = " + sumEvens(numStr);
/*-
Exercise 8
Write a function that adds the even positions of an array. For example, the array: 1 2 8 3 2 3 4 would result in the sum of 8 + 2 + 4 since they are in even positions in the array (position 2,4,6). Return the result and print it in the main program.
*/
console.log("----------------------------------------------------");
console.log(" Extra ex 8");
// Function to calculate sum
// of even numbers at even indices
function sum_even_and_even_index(arr) {
    let i = 0,
        sum = 0;
    // calculating sum of even
    // number at even index
    for (i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }

    // required sum
    return sum;
}
var arr = [1, 2, 8, 3, 2, 3, 4];

document.getElementById("ex8").innerHTML = " sum of number of Array " + arr + "   since they are in even positions in the array = " + (sum_even_and_even_index(arr));
console.log(" sum of number of Array  " + arr + "  since they are in even positions in the array is = " + sum_even_and_even_index(arr));
/*

/*
Exercise 9
Write a function that by sending a number as parameter, tells you all the even numbers before it. For example, if you send to the function the number 9, it should print 2,4,6,8.
*/
console.log("----------------------------------------------------");
console.log(" Extra ex 9");

function showEvens(num) {

    var evenNums = [];
    var num = Number(num);

    for (i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            evenNums += i + ",";
        }
    }
    document.getElementById("ex9").innerHTML = evenNums;
    console.log(evenNums);
}

showEvens(7);
/*
Exercise 10
Write a function that by sending two numbers as parameters, it tells you the odd numbers between these. For instance, if you send the numbers 1 and 13 as parameters, it should print 1,3,5,7,9,11,13.

-*/
console.log("----------------------------------------------------");
console.log(" Extra ex 10");

function number_game(x, y) {
    let numbers = [];

    if (x > y) {
        for (let i = y; i <= x; i++) {
            if (i % 2 == 0) {
                numbers.push(i);
            }
        }
    } else {
        for (let i = x; i <= y; i++) {
            if (i % 2 == 1) {
                numbers.push(i);
            }
        }
    }

    return numbers;
}
var x = 1,
    y = 13;
console.log(number_game(x, y));
document.getElementById("ex10").innerHTML = "the odd numbers between   " + x + " and " + y + " is = " + number_game(1, 13);
number_game(1, 13);