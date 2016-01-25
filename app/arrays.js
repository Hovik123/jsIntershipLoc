exports = (typeof window === 'undefined') ? global : window;
    exports.arraysAnswers = {
        /**
         *
         * @param arr
         * @param item
         * @returns {number}
         */
        indexOf: function (arr, item) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == item) {
                    return i;
                }
            }
            return -1;

        },
        /**
         *
         * @param arr
         * @returns {*}
         */
        sum: function (arr) {
            var sum = null;
            if (arr == null) {
                return;
            }
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }

            return sum;
        },
        /**
         *
         * @param arr
         * @param item
         * @returns {Array}
         */
        remove: function (arr, item) {
            var arr2 = [];
            arr.forEach(function (i) {
                if (i != item) {
                    arr2.push(i);
                }
            });
            arr = arr2;

            return arr;
        },
        /**
         *
         * @param arr
         * @param item
         * @returns {*}
         */
        removeWithoutCopy: function (arr, item) {
            var temp_array = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != item)
                    temp_array.push(arr[i]);
            }

            arr.splice(0);

            for (var i = 0; i < temp_array.length; i++) {
                if (temp_array[i] != item)
                    arr.push(temp_array[i]);
            }
            return arr;
        },
        /**
         *
         * @param arr
         * @param item
         * @returns {*}
         */
        append: function (arr, item) {
            arr.push(item);

            return arr;
        },
        /**
         * @param arr
         * @returns {*}
         */
        truncate: function (arr) {
            arr.pop();

            return arr;
        },
        /**
         *
         * @param arr
         * @param item
         * @returns {*}
         */
        prepend: function (arr, item) {
            arr.unshift(item);

            return arr;
        },
        /**
         *
         * @param arr
         * @returns {*}
         */
        curtail: function (arr) {
            arr.shift();

            return arr;
        },
        /**
         * return concat arrays
         * @param arr1
         * @param arr2
         * @returns {*|Array.<T>|string}
         */
        concat: function (arr1, arr2) {
            return arr1.concat(arr2);
        },
        /**
         *
         * @param arr
         * @param item
         * @param index
         * @returns {*}
         */
        insert: function (arr, item, index) {
            if (index < 0) {
                return;
            }
            arr.splice(index, 0, item);
            return arr;
        }

        ,
        /**
         *
         * @param arr
         * @param item
         * @returns {Array}
         */
        count: function (arr, item) {
            var arr2 = [];
            arr.forEach(function (i) {
                if (i == item) {
                    arr2.push(i);
                }
            });

            return arr2.length;
        },
        /**
         *
         * @param arr
         * @returns {Array}if contain in array
         */
        duplicates: function (arr) {
            /**
             * check
             * @param a
             * @param objItem
             * @returns {boolean}
             */
            function contain(a, objItem) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i] === objItem) {
                        return true;
                    }
                }
                return false;
            }

            var duplicates = [];
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr.length; j++) {
                    if (arr[i] == arr[j] && i != j && !contain(duplicates, arr[i])) {
                        duplicates.push(arr[i]);
                        continue;
                    }
                }
            }
            return duplicates;
        },
        /**
         * get number n*n
         * @param arr
         * @returns {Array}
         */
        square: function (arr) {
            var arr2 = [];
            for (var i = 0; i < arr.length; i++) {
                arr2[i] = arr[i] * arr[i];
            }
            return arr2;

        },
        /**
         *
         * @param arr
         * @param target
         * @returns {Array}
         */
        findAllOccurrences: function (arr, target) {
            var result = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == target) {
                    result.push(i);
                }
            }
            return result;
        }
    };
