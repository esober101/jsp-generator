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

// Arrays for lowercase, uppercase, numeric, and special characters
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*","(",")","+"];

// If else loop with alert for lowercase, uppercase, numeric, and special characters
if (lowerCase === false && upperCase === false && numericCase === false && specialCase === false) {
    alert("You must choose at least one attribute.");
  } else {
    if (lowerCase === true) passwordOptions = passwordOptions.concat(lower);
    if (upperCase === true) passwordOptions = passwordOptions.concat(upper);
    if (numericCase === true) passwordOptions = passwordOptions.concat(numeric);
    if (specialCase === true) passwordOptions = password
}

// While loop with alert for password length
while(passwordLength <8 || passwordLength > 128) {
    alert("Password length must be between 8-128.");
    passwordLength = prompt("How many characters between 8-128 would you like your password?");
}

// Completed password variable
var passwordComplete = [];
for (var p = 0; p < passwordLength; ++p){
  passwordComplete += (passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);