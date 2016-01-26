exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
    reduceString: function (str, amount) {
        var dublicates_arr = str.match(/(.)(?=.*\1)/g)
        var filtered = str.replace(/(.)(?=\1)/g, "")
        var removeDuplicatesInPlace = function (arr) {
            var i, j, cur, found;
            for (i = arr.length - 1; i >= 0; i--) {
                cur = arr[i];
                found = false;
                for (j = i - 1; !found && j >= 0; j--) {
                    if (cur === arr[j]) {
                        if (i !== j) {
                            arr.splice(i, 1);
                        }
                        found = true;
                    }
                }
            }
            return arr;
        };

        var unique_arr = removeDuplicatesInPlace(dublicates_arr);
        for (var i = 0; i < unique_arr.length; i++) {
            var item = '';
            for (var j = 0; j < amount; j++) {
                item += unique_arr[i];
            }
            var reg = new RegExp(unique_arr[i], "g");
            filtered = filtered.replace(reg, item);
        }
        return filtered;
    },
    /**
     * wordWrap function
     * @param str
     * @param cols
     * @returns {string}
     */
    wordWrap: function (str, cols) {
        var temp_str = '';
        var arr = str.split(' ');

        for (var i = 0; i < arr.length; i++) {
            temp_str += arr[i].length != 1 ? i == 0 ? arr[i] : '\n' + arr[i] : i == 0 ? arr[i] : ' ' + arr[i];
        }
        return temp_str;
    },

    /**
     *
     * @param str
     * @returns {string}
     */
    reverseString: function (str) {
        return str.split("").reverse().join("");
    }
};
