let firstOperand;
let secondOperand;
let operator;

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


// Simple arithmetic operations. a - first operand, b - second operand.
function add(a, b){ return a+b; }
function sub(a, b){ return a-b; }
function mult(a, b){ return a*b; }
function div(a, b){ return a/b; }