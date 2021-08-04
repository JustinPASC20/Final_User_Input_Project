# userInput_project

## Intructions
1. Do NOT alter the HTML or CSS and do not use an outside library.

2. Changing only the script.js and what you know about DOM, modify the website to do the following:

- When the user clicks on the submit button, the username and password are to be stored under variables
    - Start by creating your input variables, then create your onclick event 
    - *Hint: remember to prevent default so that your page doesn't reload*

- When the username is "Baby Yoda", and the password is "Squirtle", the #success element will display as "block", and the background color of the screen will become "lightblue"
    - *Hint: you need to get another reference for the body to change the background color*

- When the username and password do not match, the #error element will display as "block" and the background color of the screen will become "rgb(50, 50, 50)"

3. When the user tries multiple times, make sure only ONE message (#error OR #success) is displayed at a time
    - *Hint: try using display: "none"*

4. Once the user clicks the submit button, make sure to reassign the username input, and the password input to an empty string: ""