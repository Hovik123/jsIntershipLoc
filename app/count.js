exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    /**
     *
     * @param start
     * @param end
     * @returns {{cancel: cancel}}
     */
    count: function (start, end) {
        var timer;
        return {
            counter: function () {
                if (start <= end) {
                    timer = setTimeout(this.counter, 100);
                }
            },
            cancel: function () {
               return timer && clearTimeout(timer);
            }

        }
    }
};