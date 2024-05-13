//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length <= 1 || new Set(arr).size === 1) {
        return -Infinity;
    }
    
    let max = -Infinity;
    let secondMax = -Infinity;
    
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    
    return secondMax;
}

