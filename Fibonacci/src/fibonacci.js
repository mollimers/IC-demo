"use strict";
exports.__esModule = true;
/***********************************************************************
 * Module name: Fibonacci
 * Author: David Gillberg
 * Purpose: Contains logic that allows a user encode and decode
 *              binary fibonacci numbers, including padding.
 *
 *          Further instructions about the Fibonacci sequence and the
 *          encoding principles can be found in the README.
 *
 * Functions:
 *          --- Main Logic ---
 *              encode(number)
 *              decode(string)
 *
 *          --- Helper Functions ---
 *              zero_pad(amount)
 *              reverse_string(input)
 *              fib_seq(target)
 *
 ***********************************************************************/
var Fibo;
(function (Fibo) {
    var Fibonacci = /** @class */ (function () {
        function Fibonacci() {
        }
        Fibonacci.prototype.encode = function (number) {
            //-----------------------------
            // VARIABLES
            //-----------------------------
            // Fibonacci sequence
            var sequence = [1];
            if (number > 1) {
                sequence = fib_seq(number);
            }
            var seqLength = sequence.length;
            // return value and accumulator
            var returnValue = '';
            var acc = 0;
            //------------------------------
            // MAIN LOGIC
            //------------------------------
            // error handling
            if (number < 1) {
                return '0';
            }
            // if the last number in the sequence is the one we are seeking, create the encoded string and return it
            if (sequence[seqLength - 1] === number) {
                return zero_pad(seqLength - 1) + '11';
            }
            // all other cases, construct the return value dynamically
            for (var i = seqLength - 1; i >= 0; i--) {
                var current = sequence[i];
                // if the total accumulated value is less than or equal to the input number,
                // add '1' to the return value and increase the accumulator
                if (current + acc <= number) {
                    acc += current;
                    returnValue += '1';
                    // if we reached our target, finalise the return value
                    if (acc === number) {
                        // pad with zeroes equal to i
                        if (current > 1) {
                            returnValue += zero_pad(i);
                        }
                        // reverse returnValue
                        returnValue = reverse_string(returnValue);
                        // postpad with '1'
                        returnValue += '1';
                        break;
                    }
                }
                // if the accumulated is to small, but acc + current is to large, add a '0' to the output and continue
                else {
                    returnValue += '0';
                }
            }
            return returnValue;
        };
        Fibonacci.prototype.decode = function (string) {
            if (string === '11') {
                return 1;
            }
            if (string === '011') {
                return 2;
            }
            // for all other numbers, decode dynamically
            var fibSeq = [1, 2];
            var seqLen;
            var output = 0;
            var next;
            for (var i = 0; i < string.length - 1; i++) {
                if (i > 1) {
                    seqLen = fibSeq.length;
                    next = fibSeq[seqLen - 1] + fibSeq[seqLen - 2];
                    fibSeq = fibSeq.concat(next);
                }
                if (string.charAt(i) == '1') {
                    output += fibSeq[i];
                }
            }
            return output;
        };
        return Fibonacci;
    }());
    Fibo.Fibonacci = Fibonacci;
    /***********************************************************
     * Helper functions
     ***********************************************************/
    // create a string of zeroes to use in the encoded fibonacci
    function zero_pad(amount) {
        var zeroes = '';
        for (var i = 0; i < amount; i++) {
            zeroes += '0';
        }
        return zeroes;
    }
    // reverse the string of numbers before returning them
    function reverse_string(input) {
        var s = '';
        for (var i = input.length; i >= 0; i--) {
            s += input.charAt(i);
        }
        return s;
    }
    // generate a fibonacci sequence based on target number
    // the final number in the sequence should be the largest possible number smaller or equal to the input parameter 'target'
    function fib_seq(target) {
        var fibSeq = [1, 2];
        while (fibSeq[fibSeq.length - 1] < target) {
            var next = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
            if (next > target) {
                break;
            }
            fibSeq = fibSeq.concat(next);
        }
        return fibSeq;
    }
})(Fibo = exports.Fibo || (exports.Fibo = {}));
