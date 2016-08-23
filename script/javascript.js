var numbers = [];
var innerNumber = '';
var operation = '';
var operationResult = null;

function onButtonClick (obj) {       
    var m = obj.getAttribute('data-digit');
    
    if (m) {
        document.getElementById('calcHistoty').textContent += m;
        innerNumber += m;
    }

    return innerNumber;
}

function getNumberOfElement (obj) {
    var lastnumber = parseInt(onButtonClick(obj));

    numbers.push(lastnumber);
    innerNumber = '';
}

function onPlusClick (obj){
    operation = 'plus';
    getNumberOfElement (obj);
    if (numbers.length >= 2) onEqualClick (obj);
}

function onMinusClick(obj) {
    operation = 'minus';
    getNumberOfElement (obj);
}

function onMultiplateClick(obj) {
    operation = 'multiplate';
    getNumberOfElement (obj);
}

function onDivClick(obj) {
    operation = 'div';
    getNumberOfElement (obj);
}

function onResetClick(obj) {
    var m = obj.getAttribute('data-digit');
    var historyElement = document.getElementById('calcHistoty');
    var equalResult = document.getElementById('equalResult');

    historyElement.textContent = m;
    equalResult.value = '0';
    numbers = [];
    operationResult = null;
}

function onEqualClick (obj) {
    var element = document.getElementById('equalResult');
    
    getNumberOfElement (obj);
    switch (operation) {
        case 'plus':
            c = addition(numbers);
            break;
        case 'minus':
            c = subtraction(numbers);
            break;
        case 'multiplate':
            c = multiplate(numbers);
            break;
        case 'div':
            if (numbers[numbers.length-1]==0) {
                c = 'eror';
            } else {
                c = division(numbers);
            }
    }
    element.value = c;
}