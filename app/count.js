exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        var count = 10;
        var timerId = setInterval(function() {

            count--;

            if(count == 0) {
                clearInterval(timerId);

            }
        }, 1000);
    }

};
