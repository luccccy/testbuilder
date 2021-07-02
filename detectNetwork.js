// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix1 = parseInt(cardNumber.slice(0, 1));
  var prefix2 = parseInt(cardNumber.slice(0, 2));
  var prefix3 = parseInt(cardNumber.slice(0, 3));
  var prefix4 = parseInt(cardNumber.slice(0, 4));
  var prefix6 = parseInt(cardNumber.slice(0, 6));

  var cardLength = cardNumber.length;

  if ( (prefix2 === 38 || prefix2 === 39) && cardLength === 14) {
    return 'Diner\'s Club';
  } else if ( (prefix2 === 34 || prefix2 === 37) && cardLength === 15) {
    return 'American Express';
  } else if ( (prefix2 > 50 && prefix2 < 56) && cardLength === 16) {
    return 'MasterCard';
  } else if ( prefix1 === 4 && (prefix4 !== 4903 && prefix4 !== 4905 && prefix4 !== 4911 &&
    prefix4 !== 4936) && (cardLength === 13 || cardLength === 16 || cardLength === 19) ) {
    return 'Visa';
  } else if ( (prefix2 === 65 || (prefix3 >= 644 && prefix3 <= 649) || prefix4 === 6011) &&
   (cardLength === 16 || cardLength === 19) ) {
    return 'Discover';
  } else if ( (prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304) &&
  (cardLength >= 12 && cardLength <= 19) ) {
    return 'Maestro';
  } else if ( ((prefix6 >= 622126 && prefix6 <= 622925) || (prefix3 >= 624 && prefix3 <= 626) ||
  (prefix4 >= 6282 && prefix4 <= 6288)) && (cardLength >= 16 && cardLength <= 19) ) {
    return 'China UnionPay';
  } else if ( (prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 4936 ||
    prefix4 === 6333 || prefix4 === 6759 || prefix6 === 564182 || prefix6 === 633110)
    && (cardLength === 16 || cardLength === 18 || cardLength === 19)) {
    return 'Switch';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

