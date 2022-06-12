console.log("Hello World");
// Using let to assign variable of random number
let randomNumber = Math.random(); //0.0-1
// If statement. If the randomNumber is less than 0.50 then the condition is met
if (randomNumaber < 0.50) {

    console.log("condition was met");
    console .log (randomNumber);
}
// If the random is grater than or equal to 0.5 then condition is met
if (randomNumber >= 0.5){

    console.log('condition was met');
    console.log(randomNumber);
}

// Making a const(will never change) and using the else-if statement to figure out the day of the week
const dayOfWeek = 'saturday';


if (dayOfWeek==='Monday');

   console.log("Yay it's Monday!");

   else if (dayOfWeek==='Friday'){
       console.log ("yay its Friday")
   }
   else if (dayOfWeek==='saturday') {

    console.log("you have the correct day from the variable")
   }

 // Using const (never changes) and using the prompt function to output a WINDOW
   const age = prompt("Enter An Age");
// using if and else if statements to figure out how old you are
   if (age < 5) {
   
       console.log("Hey, you're a baby!");
   
   } else if (age < 10) {
   
       console.log("Hey, you're just a kid!");
   } else if (age < 35) {
   
       console.log("You're getting older.");
   }
   // IF ALL OTHER CONDITIONS FAIL -Use  ELSE.
   else {
   
       console.log("You are over the age of 35.");
   }

   const (fruit) = 'Papayas';
   // Using a switch statemts, very similar to if statemts but uses 'case' to input values.
   // Default is the last resort if all conditions fail. also need BREAKS after ever case statemt. 
   switch (fruit) {

            case 'Oranges':
                console.log ("Oranges are $0.59 a pound");
                break;
            case 'Bananas':
                    console.log ("Bananas are $0.59 a pound");
                break;
            case 'Avocados':
                console.log ("Avocados are $0.59 a pound");
                break;
            case 'Papayas':
                console.log ("Papayas are $0.59 a pound");
                break;
            default:
                console.log("Last Resort if All conditions Fail")

   }

   const password = Prompt("Enter in a new password");
  // if the password is less than 6 characters it is too short
   if (password.length >= 6){
  // Using indexof because if there is no spaces in the password then will return -1 and is valid 
        if (password.index0f('')===-1) {
            
            console.log ("valid password");

        } else {

            console .log ("password can't have spaces")
        }

   } else {
       console.log ("password is too short");
   }
  // Using functions and name to pass argument parameters into console.log
   function singSong(){

     console.log("DO");
     console.log("RE");
     console.log("ME");
   }

   singSong()
   singSong()
   singSong()
 
   // Using function and name to pass in multiple arguments and also using expressions ${} in the console
          function greet(firstName) {
             console,log(`hey there, ${firstName}`)
            
        function greet1(firstName,lastName) {
            console.log(`hey there, ${firstName} ${lastName}`) 

          }

    greet ('Boomer');
