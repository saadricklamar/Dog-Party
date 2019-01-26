
/*This program takes the user input for naming a dog and replaces the phrase "Some Dog" in the header.*/


var newDogName = document.querySelector(".update-button"); 
newDogName.addEventListener("click", replaceSomeDog); 
                                                      
                                                     
function replaceSomeDog(e) {                       
  e.preventDefault();  
  var userInput = document.getElementById("name"); 
  var destination = document.querySelector(".some-dog"); 
  destination.innerText = userInput.value; 
}

// Line 5 binds the variable to the button.
// Line 6 says now that we have the button binded to a variable, 
// if the button is clicked, then execute the function "replaceSomeDog". 
// Line 9 declares the function with the parameter e.                       
// Line 10 calls the preventDefault() method to ensure that when the user 
// clicks on "Name This Dog" they are not taken to another page.
// Line 11 takes the input where the new dog name is entered.
// Line 12 declares the destination for the userInput, i.e., the class ".some-dog" in the header.
// Line 13 then says the inner text of the tag be replaced with the value of the userInput.