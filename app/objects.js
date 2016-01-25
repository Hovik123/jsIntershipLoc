exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers = {
    /**
     *
     * @param fn
     * @param obj
     * @returns {*}
     */
    alterContext: function (fn, obj) {
        return fn.call(obj);
    },

    alterObjects: function (constructor, greeting) {
        return constructor.prototype.greeting = greeting;
    },
    /**
     *
     * @param obj
     * @returns {Array.<T>}
     */
    iterate: function (obj) {
        var result=[];
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                result.push(property + ": " + obj[property]);
            }
        }

        return Array.prototype.slice.call(result);
    }
};
