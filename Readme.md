# Password generator 
The assignment was to alter the provided JavaScript to generate a new password with input from the user. 

[Link to the live page](https://clabel95.github.io/03-JavaScript-Homework/)


[Link to the github repository](https://github.com/clabel95/03-JavaScript-Homework)

The image shows the full password creation website.

![The image shows the full password creation website.](https://github.com/clabel95/03-JavaScript-Homework/blob/373b1a257d112e8bd8341e203f571aea22ceeb67/Assets/images/full_page.PNG?raw=true)

The image shows the prompt for capital letters or not.

![The image shows the prompt for capital letters or not.](https://github.com/clabel95/03-JavaScript-Homework/blob/373b1a257d112e8bd8341e203f571aea22ceeb67/Assets/images/Caps_prompt.PNG?raw=true)

The image shows the prompt for special characters or not.

![The image shows the prompt for special characters or not.](https://github.com/clabel95/03-JavaScript-Homework/blob/373b1a257d112e8bd8341e203f571aea22ceeb67/Assets/images/Special_prompt.PNG?raw=true)

The image shows the prompt for password length.

![The image shows the prompt for password length.](https://github.com/clabel95/03-JavaScript-Homework/blob/373b1a257d112e8bd8341e203f571aea22ceeb67/Assets/images/Length_prompt.PNG?raw=true)

The image shows the the final product with a random password of 128 characters.

![The image shows the the final product with a random password of 128 characters.](https://github.com/clabel95/03-JavaScript-Homework/blob/373b1a257d112e8bd8341e203f571aea22ceeb67/Assets/images/new_password.PNG?raw=true)


I adapted a some code from the following source and image to use in my own code.
[stacked overflow link](https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript) 

```JavaScript
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(makeid(5));
```
I had to change the code because I needed the characters variable to be different depending on what the user input into the prompts. I did this by appending the new characters to the variable depending on the users input. The following is my altered and commented code.

```JavaScript
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
```




