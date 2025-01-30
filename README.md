# Credit Card Number Validator

This JavaScript program validates various types of credit card numbers (Visa, Mastercard, and Verve) using regular expressions. The following are the regex patterns used for validation:

## Regular Expression Patterns

### 1. **Visa Card**

Regex Pattern: `/^4[0-9]{12}(?:[0-9]{3})?$/`

- **Explanation**:
  - **`^4`**: The card must start with a `4` (Visa cards always start with 4).
  - **`[0-9]{12}`**: The next 12 characters must be digits, making a total of 13 digits.
  - **`(?:[0-9]{3})?`**: Optionally, there can be 3 more digits (making a total of 16 digits). This part is non-capturing, meaning it's just a part of the pattern but not saved as a separate group.
  - **`$`**: End of the string to ensure the number matches exactly.

### 2. **Mastercard**

Regex Pattern: `/^5[1-5][0-9]{14}$/`

- **Explanation**:
  - **`^5[1-5]`**: Mastercard cards start with a `5` followed by any number from `1` to `5`.
  - **`[0-9]{14}`**: The next 14 digits must be numbers, making a total of 16 digits.
  - **`$`**: Ensures the pattern matches the full card number.

### 3. **Verve Card**

Regex Pattern: `/^(5061|6500|6331)[0-9]{12}$/`

- **Explanation**:
  - **`^(5061|6500|6331)`**: Verve cards must start with one of the prefixes: `5061`, `6500`, or `6331`.
  - **`[0-9]{12}`**: After the prefix, there must be 12 digits, making the total length 16 digits.
  - **`$`**: Ensures the card number is 16 digits in total, matching this exact pattern.

## How the Regex Works

Each regex pattern is designed to match the specific structure and starting digits of each type of credit card number. By applying these patterns, the program ensures that the inputted credit card number adheres to the respective card type's format.

### Supported Credit Card Types:

- Visa Card
- Mastercard
- Verve Card

## Usage

To use this program, input the credit card number, and the program will determine the card type based on the number's prefix and structure. If the number matches one of the regex patterns, the program will validate the card type; otherwise, it will return an invalid message.
