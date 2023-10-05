/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    const sum = number1 + number2
    return sum
}
function addNumbers()
{
    const firstNumber = document.querySelector("#add1").value
    const secondNumber = document.querySelector("#add2").value
    const sum = add(Number(firstNumber), Number(secondNumber))
    document.querySelector("#sum").value = sum  
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers)

/* Function Expression - Subtract Numbers */
function subtract(number1, number2)
{
    const difference = number1 - number2
    return difference
}
function subtractNumbers()
{
    const firstNumber = document.querySelector("#subtract1").value
    const secondNumber = document.querySelector("#subtract2").value
    const difference = subtract(Number(firstNumber), Number(secondNumber))
    document.querySelector("#difference").value = difference
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)
 

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2)
{
    const product = number1 * number2
    return product
}
function multiplyNumbers()
{
    const firstNumber = document.querySelector("#factor1").value
    const secondNumber = document.querySelector("#factor2").value
    const product = (firstNumber, secondNumber) => '${firstNumber} ${lastNumber}';
    document.querySelector("#product").value = product
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)


/* Open Function Use - Divide Numbers */
function dividend(number1, number2)
{
    const dividend = number1 - number2
    return dividend
}
function divideNumbers()
{
    const firstNumber = document.querySelector("#dividend").value
    const secondNumber = document.querySelector("#divisor").value
    const quotient = (firstNumber, secondNumber) => '${firstNumber} ${secondNumber}';
    document.querySelector("#quotient").value = quotient
}
document.querySelector("#divideNumbers").addEventListener("click", subtractNumbers)


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
