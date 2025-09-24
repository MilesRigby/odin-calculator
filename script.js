let firstOperand;
let secondOperand;
let operator;

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
    }
}

function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mult(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}