"use strict";

function max() {
    var max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

var result = max(14, 5);
console.log(result);
document.write("Max between two numbers: " + result);

function maxOfThree() {
    var max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

result = maxOfThree(5, 7, 2)
document.write("<br>Max between three numbers: " + result);
console.log(result);

function isVowel(x) {
    var vowel = false;
    if (x.length === 1) {
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
            vowel = true;
        }
    }
    return vowel;
}

result = isVowel('e');
document.write("<br>Is vowel?: " + result);
console.log(result);

function sum() {
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

function multiply() {
    var total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i];
    }
    return total;
}

result = sum(1, 2, 3, 4);
console.log(result);
document.write("<br>Sum: " + result);
result = multiply(1, 2, 3, 4);
console.log(result);
document.write("<br>Multiply: " + result);

function reverse(revString) {
    var resultReverse = "";
    for (let i = 0; i < revString.length; i++) {
        resultReverse += revString.charAt(revString.length - 1 - i);
    }
    return resultReverse;
}

result = reverse("jag testar");
document.write("<br>Reverse: " + result);
console.log(result);

function findLongestWord(arr) {
    var longest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}

var arrInput = ["air", "summer", "one", "wednesday"]
result = findLongestWord(arrInput);
document.write("<br>Find longest word: " + result);
console.log(result);

function filterLongWords(arr, num) {
    var arrLongest = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            arrLongest.push(arr[i]);
        }
    }
    return arrLongest;
}

result = filterLongWords(arrInput, 3);
document.write("<br>Filter long words: " + result);
console.log(result);

function computeSumOfSquares(arr) {
    return arr.reduce((a, b) => a + (b * b), 0);
}

arrInput = [1, 2, 3, 4];
result = computeSumOfSquares(arrInput);
document.write("<br>Compute sum of squares: " + result);
console.log(result);

function printOddNumbersOnly(arr) {
    return arr.filter(num => num % 2 != 0);
}

result = printOddNumbersOnly(arrInput);
document.write("<br>Odd numbers: " + result);
console.log(result);

function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter(function (num) {
        return num % 2 == 0;
    })
        .reduce((a, b) => a + (b * b), 0);
}

arrInput = [1, 2, 3, 4, 5];
result = computeSumOfSquaresOfEvensOnly(arrInput);
document.write("<br>Compute sum of squares even numbers: " + result);
console.log(result);

result = arrInput.reduce((a, b) => a + b, 0);
document.write("<br>Sum with reduce: " + result);
console.log(result);

result = arrInput.reduce((a, b) => a * b, 1);
document.write("<br>Multiply with reduce: " + result);
console.log(result);

function findSecondBiggest(arr) {
    if (arr.length < 2) {
        return null;
    }
    let firstMax = arr[0];
    let secondMax = arr[1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] != firstMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}

arrInput = [19, 9, 11, 0, 12]
result = findSecondBiggest(arrInput);
document.write("<br>Second Biggest: " + result);
console.log(result);

function printFibo(num, a = 0, b = 1) {
    if(num <=1){
        return [a];
    }
    if (num == 2) {
        return [a, b];
    }
    var resulFibo = printFibo(num - 1);
    resulFibo.push(resulFibo[resulFibo.length - 1] + resulFibo[resulFibo.length - 2]);
    return resulFibo;
}

result = printFibo(3, 0, 1);
document.write("<br> Fibonacci: " + result);
console.log(result);

function sumNumbers(arr) {
    return arr.filter(num => num > 20).reduce((a, b) => a + b, 0);
}

arrInput = [29, 9, 21, 7, 12]
result = sumNumbers(arrInput);
document.write("<br> Sum numbers are greater than 20: " + result);
console.log(result);

function getNewArray(arr) {
    return arr.filter(name => name.length >= 5)
        .filter(name => name.includes('a'));
}

arrInput = ["one", "three", "arise", "beautiful"]
result = getNewArray(arrInput);
document.write("<br> Arrays is greater than and equal to 5 and contains letter a : " + result);
console.log(result);