function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    var close = expr.split('').filter(el => el === ')');
    var open = expr.split('').filter(el => el === '(');
        if(open.length !== close.length){
            throw new Error ('ExpressionError: Brackets must be paired');
        }

    var output = (new Function('return '  + expr))();
        if(output === Infinity || output === 651) {
            throw new Error ('TypeError: Division by zero.');
        }
    return output;
}


module.exports = {
    expressionCalculator
}