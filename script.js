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

// List of test cases
const testCases = [
  "4111 1111 1111 1111",
  "4222 2222 2222 2222",
  "4000 1234 5678 9010",
  "4012 8888 8888 1881",
  "5105 1051 0510 5100",
  "5200 8282 8282 8210",
  "5309 3412 3456 7890",
  "5511 2222 3333 4444",
  "5061 2345 6789 0123",
  "6500 1234 5678 9012",
  "6331 5678 9101 1123",
  "5061 9876 5432 1098",
  "1234 5678 9876 5432",
  "9999 8888 7777 6666",
  "0000 0000 0000 0000",
  "4111 1111 1111",
  "5105 1051 0510",
  "5061 2345 6789",
];

// Run validation on each test case
console.log("Credit Card Validation Results:");
for (const cardNumber of testCases) {
  console.log(
    `Card Number: ${cardNumber} -> ${validateCreditCard(cardNumber)}`
  );
}
