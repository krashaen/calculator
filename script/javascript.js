var numbers=[];
var innerNumber='';
var operation='';
var operationResult=null;
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
    innerNumber='';
}

function addition(numbers) {
    var result = 0;
    if (operationResult==null) {
    var first = numbers[0];
    }
    else {
        first=operationResult;
    }
    var second = numbers[1];
    result=first+second;
    operationResult=result;
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
    document.getElementById("calcHistoty").textContent = m;
    document.getElementById("equalResult").value = "0";
    numbers=[];
    operationResult=nulls;
}

function onEqualClick (obj) {
    getNumberOfElement (obj);
    if (operation =='plus') {
        c = addition(numbers);
        document.getElementById("equalResult").value = c;
    }
    if (operation =='minus') {
        c = subtraction(numbers);
        document.getElementById("equalResult").value = c;
    }
    if (operation =='multiplate') {
        c = multiplate(numbers);
        document.getElementById("equalResult").value = c;
    }
    if (operation =='div') {
        if (numbers[numbers.length-1]==0) document.getElementById("equalResult").value = "eror";
        else {
            c = division(numbers);
            document.getElementById("equalResult").value = c;
        }
    }
}