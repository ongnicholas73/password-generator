var uppers = "QUERTYUIOPASDFGHJKLZXCVBNM";
var lowers = "qwertyuiopasdfghjklzxcvbnm";
var nums = "1234567890";
var symbols = "!@#$%^&*()_+";

document.querySelector("#generate").addEventListener("click", function (event) {
  var howManyCharactersF = function (howManyCharacters) {
    if (howManyCharacters < 8 || howManyCharacters > 120) {
      alert(
        "Password may not have less than 8 characters or greater than 120 charaters"
      );
      var numChr = parseInt(
        prompt("How many characters would you like in you password")
      );
      howManyCharactersF(numChr);
    } else {
      return howManyCharacters;
    }
  };

  var howManyCharacters = parseInt(
    prompt("How many characters would you like in you password")
  );

  howManyCharacters = howManyCharactersF(howManyCharacters);

  var doesUserWantUppercase = confirm("Would you like uppercase letters?");

  var possibilites = "";

  if (doesUserWantUppercase) {
    possibilites += uppers;
  }

  var doesUserWantLowercase = confirm("Would you like lowercase letters?");

  if (doesUserWantLowercase) {
    possibilites += lowers;
  }

  var doesUserWantSymbols = confirm("Would you like symbols?");

  if (doesUserWantSymbols) {
    possibilites += symbols;
  }

  var doesUserWantNumbers = confirm("Would you like numbers?");

  if (doesUserWantNumbers) {
    possibilites += nums;
  }

  var password = "";
  for (index = 0; index < howManyCharacters; index++) {
    var ranNum = Math.floor(Math.random(index) * possibilites.length);
    var randChar = possibilites[ranNum];
    password = password + randChar;
  }

  document.querySelector("#text-area").value = password;
});
