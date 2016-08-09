exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var regex = new RegExp(dirName,"i");
    var result = [];
    //noinspection JSAnnotator
    for(var file of data.files) {
      if (typeof file === 'object') {
        var subDirResult = this.listFiles(file, dirName);
        result = result.concat(subDirResult);
      } else {
        if (file.match(regex))
          result.push(file);
      }
    }
    return result;
  },

  permute: function(inputArr) {
    var results = [];

    function perm(arr, memo) {
      var cur, memo = memo || [];

      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        perm(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }

      return results;
    }

    return perm(inputArr);
  },

  fibonacci: function(n) {
    if (n === 1 || n === 2) return 1;
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  },

  validParentheses: function(n) {
    var result = [];
    function brackets(open, close, str) {
      if (open === 0 && close === 0) result.push(str);
      if (open > 0) brackets(open - 1, close + 1, str + "(");
      if (close > 0) brackets(open, close - 1, str + ")");
    }
    brackets(n,0,"");
    return result;
  }
};
