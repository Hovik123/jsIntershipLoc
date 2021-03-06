exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
    /**
     *
     * @returns {Function}
     */
    globals: function () {
        return function () {
            return myObject = {
                name: 'Jory'
            };
        }

    },
    /**
     *
     * @param flag
     * @returns {*}
     */
    functions: function (flag) {
        function getValue() {
            return flag === true ? 'a' : 'b';
        }

        return getValue();
    },
    /**
     *
     * @param num
     * @returns {Number}
     */
    parseInt: function (num) {

        return parseInt(num,10);
    },
    /**
     *
     * @param val1
     * @param val2
     * @returns {boolean}
     */
    identity: function (val1, val2) {
        return val1 === val2 ? true : false;
    }
};
