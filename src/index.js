const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resultStr = '';
    let arr = expr.match(/.{1,10}/g).map( item => {
        let subArr = item.split('');
        let result = '';
        subArr.forEach( (leter,i) => {
            if (leter == '1' || (leter == '0' && subArr[i - 1] == '1')) {
                result += leter;
            } else if(leter == '*') {
                result += leter;
            }
        });
        return result;
    });
    arr.forEach( (item,i) => {
        let result = '';
        let subArr = item.match(/.{1,2}/g);
        subArr.forEach( (item,i) => {
            if (item == '10') {
                result += '.';
            } else if (item == '11') {
                result += '-';
            } else if (item == '**' && i == 4) {
                result += ' ';
            }
        });
        arr[i] = result;
    });
    arr.forEach( item => {
        if (item == ' ') {
            resultStr += ' ';
        } else {
            resultStr += MORSE_TABLE[item];
        }
    });
    return resultStr;
}

module.exports = {
    decode
};