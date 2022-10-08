function isOperator(value) {
    var operatorString = "+-*/()";
    return operatorString.indexOf(value) > -1
}
function getPrioraty(value) {
    switch (value) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}
function prioraty(o1, o2) {
    return getPrioraty(o1) <= getPrioraty(o2);
}
export function dal2Rpn(exp) {
    var inputStack = [];
    var outputStack = [];
    var outputQueue = [];
    let res = '';
    for (var i = 0, len = exp.length; i < len; i++) {
        var cur = exp[i];
        if (cur != ' ') {
            res = res + cur;
            if (i + 1 < exp.length) {
                if (isOperator(exp[i])) {
                    inputStack.push(res);
                    res = ''
                } else {
                    if (isOperator(exp[i + 1])) {
                        inputStack.push(res);
                        res = ''
                    }
                }
            } else {
                inputStack.push(res);
                res = ''
            }
        }
    }
    while (inputStack.length > 0) {
        var cur = inputStack.shift();
        if (isOperator(cur)) {
            if (cur == '(') {
                outputStack.push(cur);
            } else if (cur == ')') {
                var po = outputStack.pop();
                while (po != '(' && outputStack.length > 0) {
                    outputQueue.push(po);
                    po = outputStack.pop();
                }
                if (po != '(') {
                    throw "error: unmatched ()";
                }
            } else {
                while (prioraty(cur, outputStack[outputStack.length - 1]) && outputStack.length > 0) {
                    outputQueue.push(outputStack.pop());
                }
                outputStack.push(cur);
            }
        } else {
            outputQueue.push(new Number(cur));
        }
    }
    if (outputStack.length > 0) {
        if (outputStack[outputStack.length - 1] == ')' || outputStack[outputStack.length - 1] == '(') {
            throw "error: unmatched ()";
        }
        while (outputStack.length > 0) {
            outputQueue.push(outputStack.pop());
        }
    }
    return outputQueue;
}
export function evalRpn(rpnQueue) {
    var outputStack = [];
    while (rpnQueue.length > 0) {
        var cur = rpnQueue.shift();

        if (!isOperator(cur)) {
            outputStack.push(cur);
        } else {
            if (outputStack.length < 2) {
                throw "unvalid stack length";
            }
            var sec = outputStack.pop();
            var fir = outputStack.pop();
            outputStack.push(getResult(fir, sec, cur));
        }
    }
    if (outputStack.length != 1) {
        throw "unvalid expression";
    } else {
        return outputStack[0];
    }
}
function getResult(first, second, operator) {
    var result = 0;
    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        default:
            return 0;
    }
    function formatFloat(f, digit) {
        var m = Math.pow(10, digit);
        return parseInt(f * m, 10) / m;
    }
    return (formatFloat(result, 2));
}