exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        if (start > end) {
            return;
        }
        var count=0;
        for (var i = start; i < end; i++) {
            count++;
        }
        return count;
    }
};
