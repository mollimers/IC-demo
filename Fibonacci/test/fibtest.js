"use strict";
exports.__esModule = true;
var fibonacci_1 = require("../src/fibonacci");
var fibbo = new fibonacci_1.FiboEncDec.Fibonacci();
var fib_test = /** @class */ (function () {
    function fib_test() {
        this.test_encode = function test_encode(number) {
            var retVal = fibbo.encode(number);
            console.log(retVal);
        };
        this.test_decode = function test(string) {
            var retVal = fibbo.decode(string);
            console.log(retVal);
        };
    }
    return fib_test;
}());
var test = new fib_test();
test.test_encode(0);
test.test_encode(1);
test.test_encode(2);
test.test_encode(3);
test.test_encode(4);
test.test_encode(5);
test.test_encode(6);
test.test_encode(7);
test.test_encode(8);
test.test_encode(9);
test.test_encode(10);
test.test_decode('11');
test.test_decode('011');
test.test_decode('0011');
test.test_decode('1011');
test.test_decode('00011');
test.test_decode('10011');
test.test_decode('01011');
test.test_decode('000011');
test.test_decode('100011');
test.test_decode('010011');
