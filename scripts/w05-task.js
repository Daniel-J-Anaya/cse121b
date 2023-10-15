/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector(`#temples`);
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let articleElement = document.createElement(`article`);
        let nameElement = document.createElement(`h3`);
        let imageElement = document.createElement(`img`);

        nameElement.textContent = temple.templeName;
        imageElement.setAttribute(`src`, temple.imageURL);
        imageElement.setAttribute(`alt`, temple.location);

        articleElement.appendChild(nameElement);
        articleElement.appendChild(imageElement);

        templesElement.appendChild(articleElement);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(`https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`);
    const data = await response.json();
    templeList = [data]
    output(templeList);
};


/* reset Function */
function reset() {
    let templeArticle = document.getElementById('temples');
    while (templeArticle.firstChild) {
        templeArticle.removeChild(templeArticle.firstChild);
    }
};


/* sortBy Function */
const sortBy = (sortType) => {
    reset();

    if (sortType === 'templeNameAscending') {
        sortedList = templeList.sort(function(a, b){
            let x = a.templeName.toLowerCase();
            let y = b.templeName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        output(sortedList);

    } else if (sortType === 'templeNameDescending') {
        sortedList = templeList.sort(function(a, b){
            let x = a.templeName.toLowerCase();
            let y = b.templeName.toLowerCase();
            if (x > y) {return -1;}
            if (x < y) {return 1;}
            return 0;
        });
        output(sortedList);
    };
};


getTemples();

/* Event Listener */
document.getElementById('#sortBy').addEventListener('change', () => { sortBy(templeList) });

