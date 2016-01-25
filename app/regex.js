exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
    /**
     *
     * @param str
     * @returns {boolean}
     */
    containsNumber: function (str) {
        var re = /\d+/i;
        return re.test(str);
    },
    /**
     *
     * @param str
     * @returns {boolean}
     */
    containsRepeatingLetter: function (str) {
        var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str);
        return hasDuplicates;
    },
    /**
     *
     * @param str
     * @returns {boolean}
     */
    endsWithVowel: function (str) {
        var re = /(\w$)/g;
        var lastIndex = re.exec(str)[0].toLowerCase();
        return lastIndex == "a" ||
                lastIndex == "e" ||
                lastIndex == "i" ||
                lastIndex == "o" ||
                lastIndex == "u"
                ? true : false;
    },
    /**
     *
     * @param str
     * @returns {*}
     */
    captureThreeNumbers: function (str) {
        var re = /(\d{3})/i;
        if (re.test(str)) {
            return re.exec(str)[0];
        }
        return false;

    },
    /**
     *
     * @param str
     * @returns {boolean}
     */
    matchesPattern: function (str) {
        var re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}/i;
        if (re.test(str)) {
            return str.length > 12 ? false : true;
        }
        return false;
    },
    /**
     *
     * @param str
     * @returns {boolean}
     */
    isUSD: function (str) {
        var re = /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/gi;
        return re.test(str);
    }
};
