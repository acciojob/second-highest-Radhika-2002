function secondHighest(arr) {
    // Edge case: If the array is empty or has only one element, return -Infinity
    if (arr.length <= 1) {
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

    // Edge case: If all elements are the same, secondMax will remain -Infinity
    if (secondMax === -Infinity) {
        return -Infinity;
    }

    return secondMax;
}