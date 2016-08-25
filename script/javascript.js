var numbers = [];
var innerNumber = '';
var operation = null;
var operationResult = null;
var historyElrment = document.getElementById('calcHistoty');
var resultElement = document.getElementById('equalResult');

function onButtonClick (obj) {
    var m = obj.getAttribute('data-digit'); // rename to digit

    if (m) {
        if (operationResult == null) {
            historyElrment.textContent += m;
            innerNumber += m;
        } else {
            historyElrment.textContent = operationResult;
            historyElrment.textContent += m; // move to first line in this block
            innerNumber += m;
            operationResult = null;
        }
    }

    return innerNumber;
}

function getNumberOfElement (obj) {
    var lastnumber = parseInt(innerNumber); // to camel case

    if (isNaN(lastnumber)) {
        innerNumber = '';
        return; // unnecessary return
    } else {
        numbers.push(lastnumber);
        innerNumber = '';
    }
}

function onOperationClick() {

}

/* Unify handlers */
function onPlusClick (obj){
    if (operation != null) return;
    onButtonClick (obj);
    operation = addition;
    getNumberOfElement (obj);
}

function onMinusClick(obj) {
    if (operation != null) return;
    onButtonClick (obj);
    operation = subtraction;
    getNumberOfElement (obj);
}

function onMultiplateClick(obj) {
    if (operation != null) return;
    onButtonClick (obj);
    operation = multiplate;
    getNumberOfElement (obj);
}

function onDivClick(obj) {
    if (operation != null) return;
    onButtonClick (obj);
    operation = division;
    getNumberOfElement (obj);
}
/* End unify handlers */

function onResetClick(obj) {
    var m = obj.getAttribute('data-digit'); // rename

    historyElrment.textContent = m;
    resultElement.value = '0';
    numbers = [];
    operationResult = null;
}

function onEqualClick (obj) {
    var c = null; // rename
    getNumberOfElement (obj);
    c = operation(numbers);
    resultElement.value = c;
    numbers = [];
    numbers[0] = c;
    operation = null;
}