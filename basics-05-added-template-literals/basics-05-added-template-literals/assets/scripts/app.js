const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}
function calculationDescription(operator,  beforeCalc, afterCalc) {
    const calcDescription = `${beforeCalc} ${operator} ${afterCalc}`
    outputResult(currentResult, calcDescription);
}

function add() {
    const enterdNumber  = getUserInput();
     const initialResult = currentResult;   
    currentResult = currentResult + enterdNumber;
    calculationDescription("+",initialResult,enterdNumber);
}

function subtract() {
    const enterdNumber  = getUserInput();
    const initialResult = currentResult;  
    currentResult = currentResult - enterdNumber;
    calculationDescription("-",initialResult,enterdNumber);

}

function multiply() {
    const enterdNumber  = getUserInput();
    const initialResult = currentResult;  
    currentResult = currentResult * enterdNumber;
    calculationDescription("*",initialResult,enterdNumber);

}

function divide() {
    const enterdNumber  = getUserInput();
    const initialResult = currentResult;  
    currentResult = currentResult / enterdNumber;
    calculationDescription("/",initialResult,enterdNumber);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click', divide);