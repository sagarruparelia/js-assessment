exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((a,b) => a+b);
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; ++i) {
      if(arr[i] === item)
        count++;
    }
    return count;
  },

  duplicates: function(arr) {
    var obj = {};
    var result = [];
    for(var i = 0; i < arr.length; ++i) {
      if (!obj[arr[i]]) obj[arr[i]] = 0;
      obj[arr[i]]++;
    }
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (obj[i] > 1)
          result.push(parseInt(i));
      }
    }
    console.log(result);
    return result;
  },

  square: function(arr) {
    for(var i = 0; i < arr.length; ++i) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    for(var i = 0; i < arr.length; ++i) {
      if (arr[i] === target) {
        result.push(i);
      }
    }
    return result;
  }
};
