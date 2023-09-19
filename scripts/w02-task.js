/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Daniel Anaya';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/portrait.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of Daniel Anaya`);

/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Sushi', 'Bacon Cheeseburgers', 'Burritos', 'Lemon Cake']
foodElement.innerHTML = favoriteFoods;
let newFood = 'Tacos';
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`



