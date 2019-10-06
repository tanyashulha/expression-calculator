function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    var close = expr.split('').filter(el => el === ')');
    var open = expr.split('').filter(el => el === '(');

}


module.exports = {
    expressionCalculator
}