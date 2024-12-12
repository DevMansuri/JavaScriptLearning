const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}
function calculationDescription(operator,  beforeCalc, afterCalc) {
    const calcDescription = `${beforeCalc} ${operator} ${afterCalc}`
    outputResult(currentResult, calcDescription);
}

function writeToLog (
    operationIdentifire, 
    number,
    preResult,
    newResult
 ) {
    let logEntry = {
        operation : operationIdentifire,
        enterNumber : number,
        preResult : preResult,
        result : newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);

    
}

function add() {
    const enterdNumber  = getUserInput();
     const initialResult = currentResult;   
    currentResult = currentResult + enterdNumber;
    calculationDescription("+",initialResult,enterdNumber);
    writeToLog("Add",enterdNumber,initialResult,currentResult);
}

function subtract() {
    const enterdNumber  = getUserInput();
    const initialResult = currentResult;  
    currentResult = currentResult - enterdNumber;
    calculationDescription("-",initialResult,enterdNumber);
    writeToLog("Subtract",enterdNumber,initialResult,currentResult);

}

function multiply() {
    const enterdNumber  = getUserInput();
    const initialResult = currentResult;  
    currentResult = currentResult * enterdNumber;
    calculationDescription("*",initialResult,enterdNumber);
    writeToLog("Multiply",enterdNumber,initialResult,currentResult);

}

function divide() {
    const enterdNumber  = getUserInput();
    const initialResult = currentResult;  
    currentResult = currentResult / enterdNumber;
    calculationDescription("/",initialResult,enterdNumber);
    writeToLog("divide",enterdNumber,initialResult,currentResult);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click', divide);