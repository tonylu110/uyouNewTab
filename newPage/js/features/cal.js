import { elemenetGetId } from "../main/function.js";

export default function calUse() {
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
    function dal2Rpn(exp) {
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
    function evalRpn(rpnQueue) {
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
    elemenetGetId('clear').onclick = function () {
        document.cal.txt.value = '';
    }

    elemenetGetId('/').onclick = function () {
        document.cal.txt.value += '/';
    }

    elemenetGetId('*').onclick = function () {
        document.cal.txt.value += '*';
    }

    elemenetGetId('7').onclick = function () {
        document.cal.txt.value += '7';
    }

    elemenetGetId('8').onclick = function () {
        document.cal.txt.value += '8';
    }

    elemenetGetId('9').onclick = function () {
        document.cal.txt.value += '9';
    }

    elemenetGetId('-').onclick = function () {
        document.cal.txt.value += '-';
    }

    elemenetGetId('4').onclick = function () {
        document.cal.txt.value += '4';
    }

    elemenetGetId('5').onclick = function () {
        document.cal.txt.value += '5';
    }

    elemenetGetId('6').onclick = function () {
        document.cal.txt.value += '6';
    }

    elemenetGetId('+').onclick = function () {
        document.cal.txt.value += '+';
    }

    elemenetGetId('1').onclick = function () {
        document.cal.txt.value += '1';
    }

    elemenetGetId('2').onclick = function () {
        document.cal.txt.value += '2';
    }

    elemenetGetId('3').onclick = function () {
        document.cal.txt.value += '3';
    }

    elemenetGetId('0').onclick = function () {
        document.cal.txt.value += '0';
    }

    elemenetGetId('00').onclick = function () {
        document.cal.txt.value += '00';
    }

    elemenetGetId('.').onclick = function () {
        document.cal.txt.value += '.';
    }

    elemenetGetId('result').onclick = function () {
        document.cal.txt.value = evalRpn(dal2Rpn(document.cal.txt.value));
    }
}
