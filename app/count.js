exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    /**
     *
     * @param start
     * @param end
     * @returns {{cancel: cancel}}
     */
    count : function (start, end) {
        var timeout;
        function counter () {
            if (start <= end) {
                console.log(start++);
                timeout = setTimeout(counter, 100);
            }
        }
        counter();
        return {
            cancel : function(){
                timeout && clearTimeout(timeout);
            }
        }
    }
};