exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
    listFiles: function (data, dirName) {
        var arr = [];
        return function (){

            data.files.forEach(function (i) {
                //console.log(i);
                if (typeof  i === "object") {
                    this.listFiles(file,'js');

                    console.log(i.files,'object');
                    this.listFiles(i.files, i.dir);
                } else {
                    console.log(i,'files');
                    arr.push(i);
                    console.log(arr,'arr');
                }
            });
            return arr;
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
        var make=function (arr, el) {
            var i, i_m, item;
            var len = arr.length;
            var res = [];

            for(i = len; i >= 0; i--) {
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

        for(i = 1; i < len; i++) {
            el = arr[i];
            prev = curr;
            curr = [];

            prev.forEach(function(item) {
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
