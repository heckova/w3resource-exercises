function compare(num) {
    if (num >= 13) {
        difference = Math.abs(num - 13) * 2;
    }
    else if (num < 13 && num >= 0) {
        difference = Math.abs(num - 13);
    }
    else if (num < 0) {
        difference = Math.abs(num) + 13;
    }
    return difference;
}

console.log(compare(13));
console.log(compare(15));
console.log(compare(11));
console.log(compare(-1));