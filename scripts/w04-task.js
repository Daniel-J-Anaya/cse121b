/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: `Daniel Anaya`,
  photo: `images/portrait.jpg`,
  favoriteFoods: [
    `Pizza`,
    `Sushi`,
    `Bacon Cheeseburgers`,
    `Burritos`,
    `Lemon Cake`,
  ],
  hobbies: [
    `Photography`,
    `Digital Art`,
    `Traveling`,
    `Video Games`,
    `Excercise`,
  ],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: `Los Angeles, CA`,
  length: `23 years`,
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector(`#name`).textContent = myProfile.name;

/* Photo with attributes */
document.querySelector(`#photo`).setAttribute(`src`, myProfile.photo);
document.querySelector(`#photo`).setAttribute(`alt`, myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement(`li`);
  li.textContent = food;
  document.querySelector(`#favorite-foods`).appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement(`li`);
  li.textContent = hobby;
  document.querySelector(`#hobbies`).appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
  let placesLivedPlace = document.createElement(`dt`);
  placesLivedPlace.textContent = placeLived.place;

  let placesLivedLength = document.createElement(`dd`);
  placesLivedLength.textContent = placeLived.length;

  document.querySelector(`#places-lived`).appendChild(placesLivedPlace);
  document.querySelector(`#places-lived`).appendChild(placesLivedLength);
});
