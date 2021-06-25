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
  var prefix = parseInt(cardNumber.slice(0, 2));
  var prefix3 = parseInt(cardNumber.slice(0, 3));
  var prefix4 = parseInt(cardNumber.slice(0, 4));

  var cardLength = cardNumber.length;

  if ( (prefix === 38 || prefix === 39) && cardLength === 14) {
    return 'Diner\'s Club';
  } else if ( (prefix === 34 || prefix === 37) && cardLength === 15) {
    return 'American Express';
  } else if ( (prefix > 50 && prefix < 56) && cardLength === 16) {
    return 'MasterCard';
  } else if ( (prefix >= 40 && prefix <= 49) &&
  (cardLength === 13 || cardLength === 16 || cardLength === 19) ) {
    return 'Visa';
  } else if ( (prefix === 65 || (prefix3 >= 644 && prefix3 <= 649) || prefix4 === 6011) &&
   (cardLength === 16 || cardLength === 19)) {
    return 'Discover';
  } else if ((prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304) &&
  (cardLength >= 12 && cardLength <= 19)) {
    return 'Maestro';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

