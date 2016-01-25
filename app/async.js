exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
    /**
     * return promise
     * @param value
     * @returns {*}
     */
    async: function (value) {
        var dfd = $.Deferred();
        var timeoutID = window.setTimeout(function () {
            dfd.resolve(value);
        }, 1000);
        return dfd.promise();
    },
    /**
     *
     * @param url
     * @returns {*|Promise.<T>}
     */
    manipulateRemoteData: function (url) {
        var get = $.ajax({
            url: url
        });

        return get.done().then(function (response) {
            peopleArray = [];
            for (var person in response.people) {
                peopleArray.push(response.people[person].name);
            }
            peopleArray.sort();
            return peopleArray;

        });


    }
};
