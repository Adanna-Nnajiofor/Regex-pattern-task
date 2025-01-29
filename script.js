const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to validate credit card
function validateCreditCard(cardNumber) {
  cardNumber = cardNumber.replace(/[\s\-]/g, "");

  // Regular expressions for different card types
  const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/; // Starts with 4, 13 or 16 digits
  const regexMastercard = /^5[1-5][0-9]{14}$/; // Starts with 51-55, followed by 14 digits
  const regexVerve = /^(5061|6500|6331)[0-9]{12}$/; // Starts with 5061, 6500, or 6331, followed by 12 digits

  // Validate the card number based on the regex
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

// Ask the user to input a credit card number
rl.question("Please enter your credit card number: ", (cardNumber) => {
  // Call the validate function and output the result
  console.log(validateCreditCard(cardNumber));

  // Close the readline interface after the output
  rl.close();
});
