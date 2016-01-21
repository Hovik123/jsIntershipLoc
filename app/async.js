exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

  },

  manipulateRemoteData : function(url) {
    $.get( url, function( data ) {
      if(data){
        return 'success';
      }
      return false;
    });


    console.log(url);
    return url;
  }
};
