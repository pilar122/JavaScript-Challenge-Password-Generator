// Arrays
var uppercaseAlphabetInfo = [ 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
  
  var lowercaseAlphabetInfo = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  
  var numericInfo = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" 
  ];
  
  var specialCharInfo = [
    " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-",".","/",":",";","<","=",">","?","@","[", "]", "^", "_", '`', "{", "|", "}", "~"
  ];
  
  var passwordInfo = [
  ]
  
  var passwordValue = [
  ]
  
  // Functions
  var random = function(x) {
    var value = x[Math.floor(Math.random() * x.length)];
    return value;
  };
  
  var generatePassword = function() {
  
    // Array Reset
    passwordValue = [];
    passwordInfo = [];
  
    // Welcome
    window.alert("Welcome to the password generator!");
  
    // Prompt Function
    var prompts = function() {
  
      // User Declaration of Length
      var lengthPrompt = window.prompt("How many total characters does the password need to be? It may be between 8 and 128 characters in length.");
      if (lengthPrompt <= 128 && lengthPrompt >= 8) {
      }
      else {
        window.alert("Please select a length between 8 and 128 characters for your password.");
        return prompts();
      }
  
      // User Character Generator Prompts
      var uppercasePrompt = window.confirm("Does the password need to include uppercase letters?");
      var lowercasePrompt = window.confirm("Does the password need to include lowercase letters?");
      var numericPrompt = window.confirm("Does the password need to include numeric values?");
      var specialCharPrompt = window.confirm('Does the password need to include special characters, i.e. "!", "*", "&", etc.?');
  
        // Character Set Generators
        if (uppercasePrompt) {
          passwordInfo = passwordInfo.concat(uppercaseAlphabetInfo);
        };
  
        if (lowercasePrompt) {
          passwordInfo = passwordInfo.concat(lowercaseAlphabetInfo);
        };
  
        if (numericPrompt) {
          passwordInfo = passwordInfo.concat(numericInfo);
        };
  
        if (specialCharPrompt) {
          passwordInfo = passwordInfo.concat(specialCharInfo);
        };
  
        if (!uppercasePrompt && !lowercasePrompt && !numericPrompt && !specialCharPrompt) {
          window.alert("Please select at least one character set for your password.")
          prompts();
        };
        
        // Randomizer of User-defined Characters
        for (i =0; i < lengthPrompt; i++) {
          passwordValue[i] = random(passwordInfo);
        };
    } 
  
    // Function Calls and Returned Password Structure
    prompts();
    passwordValue.toString;
    passwordValue = passwordValue.join("");
    return passwordValue;
  };
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  };
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);