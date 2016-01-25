exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
    /**
     * return module
     * @param str1
     * @param str2
     * @returns {{sayIt, name, greeting}}
     */
    createModule: function (str1, str2) {
        return (function () {
            return {
                sayIt: function () {
                    return this.greeting + ", " + this.name;
                },
                name: str2,
                greeting: str1
            }
        }());
    }
};
