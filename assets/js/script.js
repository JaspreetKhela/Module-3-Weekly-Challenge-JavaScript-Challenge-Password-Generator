// Title: Random Password Generator
// Description: Generate a random password depending on what characters the user wants to include in the password
// Created by: Jaspreet Khela
// Created on: June 16th, 2021


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password generator function
function generatePassword(){
  var generatedPassword = '';
  
  // Character arrays
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialCharacters = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\'',']','^','_','`','{','|','}','~'];
  var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];

  // Counters
  i=0;
  j=0;

  // Password length prompt
  var passwordLength = parseInt(window.prompt("How long will your password be? Choose a password length of at least 8 characters and no more than 128 characters", "Enter a password length e.g. '8'"));
  // Password length validation
  while (!(parseInt(passwordLength)>=8 && parseInt(passwordLength)<=128)){
    passwordLength = parseInt(window.prompt("How long will your password be? Choose a password length of at least 8 characters and no more than 128 characters", "Enter a password length e.g. '8'"));
  }

  console.log('Password length: ',passwordLength);

  while (i===0){    
    // Lowercase characters prompt
    var lowercaseConfirm = window.prompt("Should the password contain lowercase characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Lowercase characters validation
    while (!(lowercaseConfirm==='Y'||lowercaseConfirm==='N')){
      lowercaseConfirm = window.prompt("Should the password contain lowercase characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (lowercaseConfirm==='Y'){
      i++;
    }

    // Uppercase characters prompt
    var uppercaseConfirm = window.prompt("Should the password contain uppercase characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Uppercase characters validation
    while (!(uppercaseConfirm==='Y'||uppercaseConfirm==='N')){
      uppercaseConfirm = window.prompt("Should the password contain uppercase characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (uppercaseConfirm==='Y'){
      i++;
    }

    // Numeric characters prompt
    var numericConfirm = window.prompt("Should the password contain numbers? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Numeric characters validation
    while (!(numericConfirm==='Y'||numericConfirm==='N')){
      numericConfirm = window.prompt("Should the password contain numbers? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (numericConfirm==='Y'){
      i++;
    }

    // Special characters prompt
    var specialCharactersConfirm = window.prompt("Should the password contain special characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Special characters validation
    while (!(specialCharactersConfirm==='Y'||specialCharactersConfirm==='N')){
      specialCharactersConfirm = window.prompt("Should the password contain special characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (specialCharactersConfirm==='Y'){
      i++;
    }
  }

  // Generate the password
  while (j<parseInt(passwordLength)){
    // Choose a random lowercase character
    if (lowercaseConfirm==='Y'){
      generatedPassword = generatedPassword.concat(lowercaseCharacters[(Math.floor(Math.random()*lowercaseCharacters.length))]);
      j++;
    }

    // Choose a random uppercase character
    if (uppercaseConfirm==='Y'){
      generatedPassword = generatedPassword.concat(uppercaseCharacters[(Math.floor(Math.random()*uppercaseCharacters.length))]);
      j++;
    }

    // Choose a random number
    if (numericConfirm==='Y'){
      generatedPassword = generatedPassword.concat(numericCharacters[(Math.floor(Math.random()*numericCharacters.length))]);
      j++;
    }

    // Choose a random special character
    if (specialCharactersConfirm==='Y'){
      generatedPassword = generatedPassword.concat(specialCharacters[(Math.floor(Math.random()*specialCharacters.length))]);
      j++;
    }
  }

  // Return the generated password to the writePassword() function
  return generatedPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
