// värdena i talserien ser ut såhär.
// 1 2 3 5 8 13 21 etc...

// Detta gör att tex:
// - 001 = 3 (0 + 0 + 3)
// - 1001 = 6 (1 + 0 + 0 + 5)
// - 010001 = 15 (0 + 2 + 0 + 0 + 0 + 13)

// Talet ska alltid avslutas med 11, dvs en extra 1'a ligger som padding, så talen ovan kommer i verkligheten se ut såhär.
// - 0011 = 3
// - 10011 = 6
// - 0100011 = 15

class Fibonacci {
	encode(number){
        let sequence: Array<number> = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];   // TODO: generate/extend this array dynamically
        let returnValue: string = '';
        let acc: number = 0;

        for (let i = sequence.length; i > 0; i--) {
            let current: number = sequence[i];

            // if the current number is the one we are seeking, create the encoded string and return it
            if (current === number){
                returnValue = this.zero_pad(i-1) + '11';
                break;
            }

            // if 
            if (current + acc <= number) {
                acc += current;
                returnValue + '1';
                
                if (acc === number) {
                    // reverse returnValue
                    returnValue = this.reverse_string(returnValue);
                    // prepad with zeroes equal to i
                    if (current > 1) {
                        this.zero_pad(i-1)
                    }
                    // postpad with '1'
                    
                }
            }


            else {
                returnValue + '0';
            }
        }
        console.log(returnValue);
        return returnValue;
	}

	decode(string) {

    }
    

    // create a string of zeroes to use in the encoded fibonacci
    zero_pad: (amount: number) => string = 
    function zero_pad(amount){
        let zeroes: string = '';
        for (let i = amount; i > amount; i--) {
            zeroes.concat('0');
        }
        return zeroes;
    }

    // reverse the string of numbers before returning them
    reverse_string: (input: string) => string =
    function reverse_string(input) {
        let s: string = '';
        for(let i = input.length; i >= 0; i--) {
            s+= input.charAt(i);
        }
        return s;
    };
    // extend_sequence(number) {
    //     if (number > sequence[sequence.length - 1]) {
    //         current = sequence[sequence.length - 1];
    //         prev = 
    
    //         while current <= last {
    
    //         }
    //     }
    // }

}

module.exports = new Fibonacci();