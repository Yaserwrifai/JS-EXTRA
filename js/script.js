/*-

Extra: Function exercises
Exercise 1
Write a JavaScript function that returns nothing and has no parameters. This function should print the result of the multiplication of two numbers (the numbers that you want).
-*/
console.log("----------------------------------------------------");
console.log(" Extra ex1");

function multiplication2numbers() {
    console.log(" 3 * 5  = ", 3 * 5)
}
multiplication2numbers();

/*-Exercise 2
Write a JavaScript function with no parameters. This function should return the result of the multiplication of two numbers (the numbers that you want), and in your main program, you should print the result.

Tip: if a function returns something, you can assign the function call to a variable. In this way, the value of the return will be held by this variable.-*/
console.log("----------------------------------------------------");
console.log(" Extra ex2");

var xMALy = function multiplication2numbers2() {

    var result = document.getElementById("demo").innerHTML = "The result of the multiplication of two numbers  3 * 5  = " + (3 * 5);
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