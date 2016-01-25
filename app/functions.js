exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    /**
     *
     * @param fn
     * @param arr
     * @returns {*}
     */
    argsAsArray: function (fn, arr) {
        return fn.apply({}, arr);
    },
    /**
     *
     * @param fn
     * @param obj
     * @returns {*}
     */
    speak: function (fn, obj) {
        return fn.call(obj);
    },
    /**
     *
     * @param str
     * @returns {Function}
     */
    functionFunction: function (str) {
        return function (str2) {
            return str + ", " + str2;
        }
    },
    /**
     *
     * @param arr
     * @param fn
     * @returns {Array}
     */
    makeClosures: function (arr, fn) {
        var arr2 = [];
        var funcs = function (arg) {
            return function () {
                return fn(arg);
            }
        };
        arr.forEach(function (i) {
            arr2.push(funcs(i));
        });
        return arr2;


    },
    /**
     *
     * @param fn
     * @param str1
     * @param str2
     * @returns {Function}
     */
    partial: function (fn, str1, str2) {
        return function (str) {
            return fn.apply({}, [str1, str2, str]);
        };
    },
    /**
     *
     * @returns {*}
     */
    useArguments: function () {
        var arr = Array.prototype.slice.call(arguments);
        var result = null;
        arr.forEach(function (i) {
            result += i;
        });

        return result;
    },
    /**
     *
     * @param fn
     * @returns {*}
     */
    callIt: function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return fn.apply({}, args);

    },

    partialUsingArguments: function (fn) {
        var args = Array.prototype.slice.call(arguments);
        return function () {
            args = Array.prototype.slice.call(arguments, 1);
            return fn.apply({}, args);
        }
    },
    /**
     *
     * @param fn
     * @returns {Function}
     */
    curryIt: function (fn) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return fn.apply({}, [a, b, c]);
                }
            }
        }
    }
};
