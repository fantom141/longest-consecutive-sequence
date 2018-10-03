module.exports = function longestConsecutiveLength(array) {

    if (array.length === 1) return 1;
    if (!array.length) return 0;

    array.sort(function (prev, cur) {
        if (cur >= prev) return -1;
        return 1;
    });

    let max = 1;
    let counter = 1;

    for (let i = 1, l = array.length; i < l; ++i) {
        if (array[i] === array[i - 1]) continue;

        if (array[i] - 1 === array[i - 1]) {
            counter++;
        } else {
            diff = array[i] - i;
            counter = 1;
        }

        max = Math.max(counter, max);
    }
    return max;
};
