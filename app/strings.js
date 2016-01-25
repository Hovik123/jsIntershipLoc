exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
    reduceString: function (str, amount) {
        for (var i=0;i<str.length;i++){
            if(str.length){

            }
        }

    },
    wordWrap: function (str, cols) {
        var temp=[];

        var arr= str.trim().split("");
        var arr2=[];
        for(var i=0;i<arr.length;i++){
            for(var j=i;j<i+1;j++){
                if(arr[i]!=" "){
                    temp.push(arr[i]);
                    arr2.push(arr[i]);
                    //console.log(temp,'temp');
                }else{
                    if(temp.length >= 1){
                        //console.log(temp,'temp');
                        temp=[];
                        arr2.push('\n');
                    }
                }
            }
        }
        return arr2.join("");
        //console.log(arr);
    },
    /**
     *
     * @param str
     * @returns {string}
     */
    reverseString: function (str) {
        return str.split("").reverse().join("");
    }
};
