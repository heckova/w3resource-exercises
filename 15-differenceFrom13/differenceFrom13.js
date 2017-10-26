function compare(num) {
    if (num > 13) {
        difference = Math.abs(num - 13) * 2;
    }
    else {
        difference = Math.abs(num - 13);
    }
    return difference;
}

console.log(compare(32));
console.log(compare(11));