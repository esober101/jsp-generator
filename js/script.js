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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);