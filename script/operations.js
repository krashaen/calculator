function addition (numbers) {
    var result = 0;
    var first = null;
    var second = null;

    if (operationResult == null) {
        first = numbers[0];
    } else {
        first = operationResult;
    }

    second = numbers[1];
    result = first + second;
    operationResult = result;

    return result;
}

function subtraction(numbers) {
    var result = 0;
    var first = null;
    var second = null;

    if (operationResult == null) {
        first = numbers[0];
    } else {
        first=operationResult;
    }

    second = numbers[numbers.length-1];
    result = first - second;
    operationResult = result;

    return result;
}

function multiplate (numbers) {
    var result = 0;
    var first = null;
    var second = null;
    if (operationResult == null) {
        first = numbers[0];
    } else {
        first=operationResult;
    }

    second = numbers[numbers.length-1];
    result = first * second;
    operationResult = result;

    return result;
}

function division (numbers) {
    var result = 0;
    var first = null;
    var second = null;

    if (operationResult == null) {
    var first = numbers[0];
    } else {
        first = operationResult;
    }

    second = numbers[numbers.length-1];
    if (second == 0) {
        result = "Eror";
    } else {
        result = first / second;
    }

    operationResult = result;

    return result;
}