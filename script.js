function validateCreditCard(cardNumber) {
  // Remove spaces and dashes from the card number
  cardNumber = cardNumber.replace(/[\s\-]/g, "");

  // Regular expressions for different card types
  const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/; // Visa: Starts with 4, 13 or 16 digits
  const regexMastercard = /^5[1-5][0-9]{14}$/; // Mastercard: Starts with 51-55, 16 digits
  const regexVerve = /^(5061|6500|6331)[0-9]{12}$/; // Verve: Starts with 5061, 6500, or 6331, 16 digits

  // Validate the card number based on regex patterns
  if (regexVisa.test(cardNumber)) {
    return "Valid Visa Card";
  } else if (regexMastercard.test(cardNumber)) {
    return "Valid Mastercard";
  } else if (regexVerve.test(cardNumber)) {
    return "Valid Verve Card";
  } else {
    return "Invalid Credit Card Number";
  }
}

// Dictionary of test cases with expected results
const testCases = {
  "4111 1111 1111 1111": "Visa", // Valid Visa card
  "4222 2222 2222 2222": "Visa", // Another valid Visa card
  "5105 1051 0510 5100": "Mastercard", // Valid Mastercard
  "5200 8282 8282 8210": "Mastercard", // Another valid Mastercard
  "5061 2345 6789 0123": "Verve", // Valid Verve card
  "6500 1234 5678 9012": "Verve", // Another valid Verve card
  "1234 5678 9876 5432": "Invalid", // Invalid card number
  "9999 8888 7777 6666": "Invalid", // Another invalid card number
};

// Run validation on each test case
console.log("Credit Card Validation Results:");
for (const [cardNumber, expected] of Object.entries(testCases)) {
  const result = validateCreditCard(cardNumber);
  console.log(
    `Card Number: ${cardNumber} -> ${result} (Expected: ${expected})`
  );
}
