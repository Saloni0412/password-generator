// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Calling function generatePassword to create a random password
function generatePassword() {

// defining all the characters in different variables for the questions for criteria
lowerCase = "abcdefghijklmnopqrstuvwxyz"
upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numericValue = "1234567890"
specialCharcters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ " 
newCriteria = ""

// calling function to input the lenght of the password
userInput();
function userInput() {
var inputLength = prompt("Enter the lenght of the password between 8 - 128 characters", "only numeric form");

if(inputLength < 8 || inputLength > 128 || isNaN(inputLength)) {
  alert( "is not a valid value. Please select lenght between 8 to 128");
  userInput();
}
}

// promping for the creteria 
var inputLower = confirm("Would you like lower case in your password");

if(inputLower == true){
  newCriteria += lowerCase;
  console.log(newCriteria);
}

var inputUpper = confirm("Would you like upper case in your password");

if(inputUpper == true){
  newCriteria += upperCases;
  console.log(newCriteria);
}

var inputNumeric = confirm("Would you like numerical value in your password");

if(inputNumeric == true){
  newCriteria += numericValue;
  console.log(newCriteria);
}

var inputSymbol = confirm("Would you like special characters in your password");

if(inputSymbol == true){
  newCriteria += specialCharcters;
  console.log(newCriteria);
}

// if statement if they have selected cancle in all the criteria
if(inputLower == false && inputUpper == false && inputNumeric == false && 
  inputSymbol == false) {
    window.alert("Please select atleast one of the following criteria");
    generatePassword();
  }

  
  for(let i = 1; i < inputLength; i++) {
    var newRandom = Math.floor(Math.random() * newCriteria.length);
     password += newCriteria[newRandom];
   }

return password;
}