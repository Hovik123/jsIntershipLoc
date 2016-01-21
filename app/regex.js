exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    //return
        //true if str is regexp
        //false if str is not regexp
    var regex = new RegExp("[a-z0-9A-Z]", "g");
    return regex.exec(str);
  },

  containsRepeatingLetter : function(str) {

  },

  endsWithVowel : function(str) {

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
