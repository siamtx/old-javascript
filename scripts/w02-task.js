/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Tim Howell';
let currentYear = 2023;
let profilePicture = /VS_Code_School/cse121b/images/Tim_Howell;


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = image.querySelector(profilePicture);



/* Step 4 - Adding Content */
nameElement.innerHTML = <strong>${fullname}</strong>;
textContent.setValue(currentYear);
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile picture of Tim Howell');



/* Step 5 - Array */
const food = ["tacos", "beans", "rice", "chicken", "steak"];
let singleFood = "pork chops";
food.push(singleFood);
foodElement.innerHTML += '<br>${food}';
food.shift();
foodElement.innerHTML += '<br>${food}';
food.pop();
food.push(singleFood);
