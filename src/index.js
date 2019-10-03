function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(exp) {
    const sign = {
      '+': (a, b) => { return parseFloat(a) + parseFloat(b) },
      '-': (a, b) => { return parseFloat(a) - parseFloat(b) },
      '*': (a, b) => { return parseFloat(a) * parseFloat(b) },
      '/': (a, b) => { return parseFloat(a) / parseFloat(b) },
    };
    const signList = Object.keys(sign);
  
    let acc = 0;
    let next = '';
    let currSign = '+';
  
    for (let char of exp) {
      if (signList.includes(char)) {
        acc = sign[currSign](acc, next);
        currSign = char;
        next = '';
      } else {
        next += char;
      }
    }  
  
    return currSign === '+' ? acc + parseFloat(next) : acc - parseFloat(next);
  }
  
module.exports = {
    expressionCalculator
}