exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
    /**
     * find bit and return value
     * @param num
     * @param bit
     * @returns {Number}
     */
    valueAtBit: function (num, bit) {
        function byteString(n) {
            if (n < 0 || n > 255 || n % 1 !== 0) {
                throw new Error(n + " does not fit in a byte");
            }
            return ("000000000" + n.toString(2)).substr(-8)
        }
        var binaryValue = byteString(num);
        var result_bit = binaryValue[(binaryValue.length-bit)];
        return parseInt(result_bit);
    },
    /**
     *
     * @param str
     * @returns {Number}
     */
    base10: function (str) {
        return parseInt(str, 2);

    },
    /**
     *
     * @param num
     * @returns {string}
     */
    convertToBinary: function (num) {
        if (num < 0 || num > 255 || num % 1 !== 0) {
            throw new Error(num + " does not fit in a byte");
        }
        return ("000000000" + num.toString(2)).substr(-8);
    },
    /**
     *
     * @param a
     * @param b
     * @returns {number}
     */
    multiply: function (a, b) {
        var commonMultiplier = 1000000;

        a *= commonMultiplier;
        b *= commonMultiplier;

        return (a * b) / (commonMultiplier * commonMultiplier);
    }
};
