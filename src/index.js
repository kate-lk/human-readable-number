module.exports = function toReadable(number) {
  var numbers = new Array();
  numbers[0] = '';
  numbers[1] = 'one';
  numbers[2] = 'two';
  numbers[3] = 'three';
  numbers[4] = 'four';
  numbers[5] = 'five';
  numbers[6] = 'six';
  numbers[7] = 'seven';
  numbers[8] = 'eight';
  numbers[9] = 'nine';
  numbers[10] = 'ten';
  numbers[11] = 'eleven';
  numbers[12] = 'twelve';
  numbers[13] = 'thirteen';
  numbers[14] = 'fourteen';
  numbers[15] = 'fifteen';
  numbers[16] = 'sixteen';
  numbers[17] = 'seventeen';
  numbers[18] = 'eighteen';
  numbers[19] = 'nineteen';

  var numbersty = new Array();
  numbersty[2] = 'twenty';
  numbersty[3] = 'thirty';
  numbersty[4] = 'forty';
  numbersty[5] = 'fifty';
  numbersty[6] = 'sixty';
  numbersty[7] = 'seventy';
  numbersty[8] = 'eighty';
  numbersty[9] = 'ninety';

  if (number > 0) {
    let decimalnum = number % 10;
    let hundrednum = (number % 100 - decimalnum) / 10;
    let thousandnum = (number % 1000 - hundrednum * 10 - decimalnum) / 100;
    let thousandnumstr = '';
    let result = '';

    if (thousandnum >= 1) {
      thousandnumstr = numbers[thousandnum] + ' hundred';
    }

    if (hundrednum * 10 + decimalnum <= 19) {
      result = numbers[hundrednum * 10 + decimalnum];
    } else if (hundrednum * 10 + decimalnum > 19 && decimalnum !== 0) {
      result = numbersty[hundrednum] + ' ' + numbers[decimalnum];
    } else if (hundrednum * 10 + decimalnum > 19 && decimalnum === 0) {
      result = numbersty[hundrednum];
    }
    if (thousandnum > 0) {
      if (result === '') {
        result = thousandnumstr
      } else {
        result = thousandnumstr + ' ' + result;
      }
    }
    return result;
  } else if (number === 0) {
    return 'zero';
  } else {
    return 'Invalid number';
  }
}
