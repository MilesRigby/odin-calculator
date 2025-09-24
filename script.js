// the arithmetical expression to be displayed in the number-port on the webpage
let expression = "";

const display = document.querySelector("#number-port");

// Attach event listeners to numeral buttons to allow the input of number values
document.querySelectorAll(".numeral")
    .forEach((element, i) => {
        let n = (i+1)%10;
        element.addEventListener('click', () =>  addNumeral(n))
    });

// Make the C button clear the number port
document.querySelector("#clear")
    .addEventListener('click', () => {
        expression = "";
        displayExpression();
    });

// Adds a numeral to the number port
function addNumeral(numeral) {
    expression = expression + numeral
    displayExpression();
}

// Adds an operator to the number port
// If an operator is already present, replaces it if at the end of number port, evaluates existing expression otherwise
function addOperatorSymbol(operatorSymbol) {
    
    // If there is no expression content at all, don't add operator
    if (expression == "") { return; }

    const operators = "+-*/";

    // If an operator is already present...
    if (expression.split('').reduce((bool, char) => bool || operators.includes(char), false)) {
        if (operators.includes(expression.split('').at(-1))) { // If it's the final character
            expression = expression.slice(0, -1);
        } else { // If it's earlier in the expression
            evaluateExpression();
        }}

    expression = expression + operatorSymbol;
    displayExpression();

}

function evaluateExpression() {
    console.log("Evaluation not implemented")
    expression = "4";
    displayExpression();
}

// displays current arithmetical expression to the number port
function displayExpression() {
    display.textContent = expression;
}

// operate takes in two operands, a and b, and performs an operation on them
// operator is a string representing one of four operations -
// addition, subtraction, multiplication, and division: "+", "-", "*", "/"
function operate(a, operator, b) {
    switch(operator){
        case "+":
            return add(a, b);
        case "-":
            return sub(a, b);
        case "*":
            return mult(a, b);
        case "/":
            return div(a, b);
        default:
            console.log("ERROR: INVALID OPERATOR IN operate()")
    }
}


// Simple arithmetic operations. a - first operand, b - second operand
// Define addition, subtraction, multiplication, and division
function add(a, b){ return a+b; }
function sub(a, b){ return a-b; }
function mult(a, b){ return a*b; }
function div(a, b){ return a/b; }