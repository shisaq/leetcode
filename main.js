var convert = function(s, numRows) {
    var result = [];
    var step = 1, index = 0;
    for(var i = 0; i < s.length; i++){
        if(result[index] === undefined){
            result[index] = '';
        }
        result[index] += s[i];
        if(index === 0){
            step = 1;
        }else if(index === numRows - 1){
            step = -1;
        }
        index += step;
    }
    return result.join('');
};

var res = convert('ABCDEFGH', 2);
console.log(res);
