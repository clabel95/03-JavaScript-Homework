// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  password;
  passwordText.value = result;

};

//I had to globaly declare the result variable so that when I change it inside a function I am
//able to use that change in a different function. 
var result           = '';

//the folowing code was adapted from a responce from the following location.
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid(cap, spec, length) {
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
  // I had to reset the result at the top here so that every time we generate a new password
  // it clears the old one instead of just adding to it. 
  result = ""
 
  // if yes for cap then add the capitol leters to the character var
  if (cap == 1){
    characters = characters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  //if yes for special characters then add the special characters to the character var
  if (spec == 1){
    characters = characters + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  //the following code is used to randomly generate the password.
  //the for loop will loop for the specifed amount of times as the user put in for their password length
  //each time this loops it will add a new random character to our result variable.  
  var charactersLength = characters.length;  
  for ( var i = 0; i < length; i++ ) {

    //.charAt returns the specified character at the given location in a string.
    //.floor returns the greatest int less than or equal to its numeric argument.
    //.floor is needed to turn the random decimal value provided from .random into a whole digit value.
    //.random returns a semi random number between 0 and 1
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}






function generatePassword(){

  //I am using an array to house the responces in the form of a 1 and 0 for yes and no and
  //then just a normal number value for the password length.
  pass = [0,0,0];
  var max = 128;
  var min = 8;

  var cap_req = prompt("is there a capital letter requirement?", "y/n");
  var spec_req= prompt("is there a special character requirement?", "y/n");
  var len_input = prompt("Desired password length. (min = 8 ,max = 128)", 8);


  //the following if statements update the password array only if a yes or y responce was recived.

  if (String(cap_req) == ("y"||"Y"||"Yes"||"yes")){
    pass[0] = 1;
  }
  if (String(spec_req) == ("y"||"Y"||"Yes"||"yes")){
    pass[1] = 1;
  }
  
  //the following code checks if the value input for the length is within the boundries otherwise
  //it will just use the lowest value 
  if ((max >= parseInt(len_input)) && (parseInt(len_input) >= min)){
    pass[2] = parseInt(len_input);
  }
  else{
    pass[2] = 8;
  }
  
  //run the makeid function passing the array with the users inputs into it.
  makeid(pass[0],pass[1],pass[2]);
  //reset the password value each time you want to create a new one.
  password = "";
  //sets the password to the string value of the result from the makeid function.
  password = String(result);

  return password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
