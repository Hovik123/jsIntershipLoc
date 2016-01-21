exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {

  },

  speak : function(fn, obj) {

  },
  /**
   *
   * @param str
   * @returns {Function}
     */
  functionFunction : function(str) {
    return function (str2){
      return str + ", "+str2;
    }
  },

  makeClosures : function(arr, fn) {
  console.log(arr);
  },

  partial : function(fn, str1, str2) {
    return function (str){
      return str1 + ", " +  str2 + str;
    }
  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
