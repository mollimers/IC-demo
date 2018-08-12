import { FiboEncDec } from '../src/fibonacci';
let fibbo = new FiboEncDec.Fibonacci();

class fib_test {
    test_encode: (input: number) => void =
    function test_encode(number){
        let retVal: string = fibbo.encode(number);
        console.log(retVal);
    }

    test_decode: (input: string) => void =
    function test(string){
        let retVal: number = fibbo.decode(string);
        console.log(retVal);
    }
}

let test = new fib_test();

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
