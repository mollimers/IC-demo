import { Fibonacci } from '../src/fibonacci';

let fibbo = new Fibonacci();
fibbo.test_encode(0);
fibbo.test_encode(1);
fibbo.test_encode(2);
fibbo.test_encode(3);
fibbo.test_encode(4);
fibbo.test_encode(5);
fibbo.test_encode(6);
fibbo.test_encode(7);
fibbo.test_encode(8);
fibbo.test_encode(9);
fibbo.test_encode(10);
fibbo.test_decode('11');
fibbo.test_decode('011');
fibbo.test_decode('0011');
fibbo.test_decode('1011');
fibbo.test_decode('00011');
fibbo.test_decode('10011');
fibbo.test_decode('01011');
fibbo.test_decode('000011');
fibbo.test_decode('100011');
fibbo.test_decode('010011');
