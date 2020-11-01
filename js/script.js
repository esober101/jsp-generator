// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt and confirms for password attributes
function generatePassword(){

    // Variable declarations
    var passwordLength = prompt("How many characters between 8-128 would you like your password?");
    var lowerCase = confirm("Would you like lowercase characters?");
    var upperCase = confirm("Would you like uppercase characters?");
    var numericCase = confirm("Would you like numeric characters?");
    var specialCase = confirm("Would you like special characters?");
    var passwordOptions = [];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);