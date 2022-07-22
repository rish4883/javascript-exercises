const sumAll = function(a, b) {
    let sum = 0;
    let low;
    let high;
    if(a<0 || b<0 ||  !Number.isInteger(a) || !Number.isInteger(b) ) return "ERROR";
    if(a < b) { low = a; high = b; }
    else  { low = b; high = a; }

    for(let i=low; i<=high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
