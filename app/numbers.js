exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var result = (num >> (bit-1)).toString(2);
    return parseInt(result.charAt(result.length -1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var pad = "00000000",
        ans = num.toString(2);
    return pad.substring(0, pad.length - ans.length) + ans;
  },

  multiply: function(a, b) {

    return parseFloat((a*b).toFixed((b + "").split(".")[1].length));
  }
};
