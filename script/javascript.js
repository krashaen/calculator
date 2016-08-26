var numbers = [];
var innerNumber = '';
var operation = null;
var operationResult = null;
var historyElrment = document.getElementById('calcHistoty');
var resultElement = document.getElementById('equalResult');

function onButtonClick (obj) {
    var digit = obj.getAttribute('data-digit'); // rename to digit

    if (digit) {
        if (operationResult == null) {
            historyElrment.textContent += digit;
            innerNumber += digit;
        } else {
            historyElrment.textContent = operationResult + digit;

            innerNumber += digit;
            operationResult = null;
        }
    }

    return innerNumber;
}

function getNumberOfElement (obj) {
    var lastNumber = parseInt(innerNumber);

    if (isNaN(lastNumber)) {
        innerNumber = '';
    } else {
        numbers.push(lastNumber);
        innerNumber = '';
    }
}

function onOperationClick(obj,operationPar) {
    if (operation != null) return;
    onButtonClick (obj);
    operation = operationPar;
    getNumberOfElement (obj);

}

function onResetClick(obj) {
    var digit = obj.getAttribute('data-digit');
    historyElrment.textContent = digit;
    resultElement.value = '0';
    numbers = [];
    operationResult = null;
}

function onEqualClick (obj) {
    var  currentResult = null; // rename
    getNumberOfElement (obj);
    currentResult = operation(numbers);
    resultElement.value = currentResult;
    numbers = [currentResult];
    operation = null;
}