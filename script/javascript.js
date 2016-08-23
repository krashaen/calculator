/* 
    1. Add whitespaces between operands and operators
    2. Use singleqoute ' instead doublequote "
 */

var numbers = [];
var innerNumber = '';
var operation = '';
var operationResult = null;

function onButtonClick (obj) {       
    var m = obj.getAttribute('data-digit');
    if (m) {
        document.getElementById("calcHistoty").textContent += m;
        innerNumber += m;
    }
    return innerNumber;
}

function getNumberOfElement (obj) {
    var lastnumber = parseInt(onButtonClick(obj));
    numbers.push(lastnumber);
    innerNumber = '';
}

/* Start operations
 Move to separate file */
function addition(numbers) {
    var result = 0;
    var first = null;
    var second = null;

    if (operationResult == null) {
        first = numbers[0];
    } else {
        first=operationResult;
    }

    second = numbers[1];
    result = first + second;
    operationResult = result;

    return result;
}

function subtraction(numbers) {
    var result = 0;
    if (operationResult==null) {
    var first = numbers[0];
    }
    else {
        first=operationResult;
    }
    var second = numbers[numbers.length-1];
    result=first-second;
    operationResult=result;
    return result;
}

function multiplate (numbers) {
    var result = 0;
    if (operationResult==null) {
    var first = numbers[0];
    }
    else {
        first=operationResult;
    }
    var second = numbers[numbers.length-1];
    result=first*second;
    operationResult=result;
    return result;
}

function division (numbers) {
    var result = 0;
    if (operationResult==null) {
    var first = numbers[0];
    }
    else {
        first=operationResult;
    }
    var second = numbers[numbers.length-1];
    result=first/second;
    operationResult=result;
    return result;
}
/* End operations */

function onPlusClick (obj){
    operation='plus';
    getNumberOfElement (obj);
    if (numbers.length>=2) onEqualClick (obj);
}

function onMinusClick(obj) {
    operation='minus';
    getNumberOfElement (obj);
}

function onMultiplateClick(obj) {
    operation='multiplate';
    getNumberOfElement (obj);
}

function onDivClick(obj) {
    operation='div';
    getNumberOfElement (obj);
}

function onResetClick(obj) {
    var m = obj.getAttribute('data-digit');
    var historyElement = document.getElementById("calcHistoty");
    var equalResult = document.getElementById("equalResult");

    historyElement.textContent = m;
    equalResult.value = "0";
    numbers=[];
    operationResult=null;
}

function onEqualClick (obj) {
    var element = document.getElementById("equalResult");
    getNumberOfElement (obj);

    /* To swtich-case instruction */
    if (operation =='plus') {
        c = addition(numbers);
    }
    if (operation =='minus') {
        c = subtraction(numbers);
    }
    if (operation =='multiplate') {
        c = multiplate(numbers);
    }
    if (operation =='div') {
        if (numbers[numbers.length-1]==0) {
            c = "eror";
        } else {
            c = division(numbers);
        }
    }

    element.value = c;
}