exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        var files = [];

        function listFiles(data) {
            data.forEach(function (i) {
                if (typeof i == 'string') {
                    files.push(i);
                } else {
                    listFiles(i.files);
                }
            });
        }
        function listDirFiles(obj) {
            if (obj.dir == dirName) {
                listFiles(obj.files);
            } else {
                for (var i = 0; i < obj.files.length; i++) {
                    if (typeof obj.files[i] == 'object')
                        listDirFiles(obj.files[i]);
                }
            }
        }

        if (arguments.length === 1) {
            listFiles(data.files);
            return files;
        } else {
            listDirFiles(data);
            return files;
        }
    },
    /**
     *
     * @param arr
     * @returns {Array}
     */
    permute: function (arr) {
        /**
         * make array
         * @param arr
         * @param el
         * @returns {Array}
         */
        var make = function (arr, el) {
            var i, i_m, item;
            var len = arr.length;
            var res = [];

            for (i = len; i >= 0; i--) {
                res.push(
                    ([]).concat(
                        arr.slice(0, i),
                        [el],
                        arr.slice(i, i_m)
                    )
                );
            }

            return res;
        };
        var prev, curr, el, i;
        var len = arr.length;

        curr = [[arr[0]]];

        for (i = 1; i < len; i++) {
            el = arr[i];
            prev = curr;
            curr = [];

            prev.forEach(function (item) {
                curr = curr.concat(
                    make(item, el)
                );
            });
        }

        return curr;

    },
    /**
     * fibonacci numbers calc
     * @param n
     * @returns {*}
     */
    fibonacci: function (n) {
        if (n <= 2) {
            return 1;
        } else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    }

    ,
    /**
     *
     * @param n
     * @returns {Array}
     */
    validParentheses: function (n) {
        var arr = [];
        var Brackets = function (output, open, close, pairs) {
            if ((open == pairs) && (close == pairs)) {
                arr.push(output);
            }
            else {
                if (open < pairs)
                    Brackets(output + "(", open + 1, close, pairs);
                if (close < open)
                    Brackets(output + ")", open, close + 1, pairs);
            }
        };
        for (var i = n; i <= n; i++) {
            Brackets("", 0, 0, i);
        }
        return arr;
    }
};
