/* Name: Ethan EG */
/* Date: 2023-03-12 */
/* Section: 310 */
/* Lab: assignment 1 */
/* File: Stylesheet.css */

// get the search box and course boxes
const searchBox = document.querySelector('.search-box');
const courseBoxes = document.querySelectorAll('.course-box');

// add an event listener to the search box
searchBox.addEventListener('input', function() {
    // get the search term
    const searchTerm = searchBox.value.toLowerCase();

    // loop through each course box
    for (let i = 0; i < courseBoxes.length; i++) {
        // get the course name, code, and description from the course box
        const courseBox = courseBoxes[i];
        const courseName = courseBox.querySelector('h4').textContent.toLowerCase();
        const courseCode = courseBox.querySelector('h5:nth-of-type(2)').textContent.toLowerCase();
        const courseDescription = courseBox.querySelector('p').textContent.toLowerCase();

        // check if the course name, code, or description includes the search term
        if (courseName.includes(searchTerm) || courseCode.includes(searchTerm) || courseDescription.includes(searchTerm)) {
            // show the course box if it matches the search term
            courseBox.style.display = 'flex';
        } else {
            // hide the course box if it doesn't match the search term
            courseBox.style.display = 'none';
        }
    }
});

//initial way for the button sort 
let ascendingOrder = false;

function sortByLevel() {
    // Get the container element that holds all the course boxes
    const courseContainer = document.querySelector('.course-list');

    // Get all the course boxes inside the container element
    const courseBoxes = courseContainer.querySelectorAll('.course-box');

    // Sort the course boxes based on their level
    const sortedBoxes = Array.from(courseBoxes).sort((a, b) => {
        const aLevel = parseInt(a.querySelector('h5:nth-of-type(1)').textContent.slice(-1));
        const bLevel = parseInt(b.querySelector('h5:nth-of-type(1)').textContent.slice(-1));
        return ascendingOrder ? aLevel - bLevel : bLevel - aLevel;
    });

    // Clear the container element and add the sorted boxes back in
    courseContainer.innerHTML = '';
    sortedBoxes.forEach(box => {
        courseContainer.appendChild(box);
    });

    // Reverse the order of sorting for the next time the button is clicked
    ascendingOrder = !ascendingOrder;
}

// Sort the course boxes based on their code
function sortByCode() {
    const courseContainer = document.querySelector('.course-list');
    const courseBoxes = courseContainer.querySelectorAll('.course-box');

    // Sort the course boxes based on their code
    const sortedBoxes = Array.from(courseBoxes).sort((a, b) => {
        const aCode = a.querySelector('h5:nth-of-type(2)').textContent;
        const bCode = b.querySelector('h5:nth-of-type(2)').textContent;
        return ascendingOrder ? aCode.localeCompare(bCode) : bCode.localeCompare(aCode);
    });

    // Clear the container element and add the sorted boxes back in
    courseContainer.innerHTML = '';
    sortedBoxes.forEach(box => {
        courseContainer.appendChild(box);
    });

    // Reverse the order of sorting for the next time the button is clicked
    ascendingOrder = !ascendingOrder;
}

// Sort the course boxes based on their name
function sortByName() {
    const courseContainer = document.querySelector('.course-list');
    const courseBoxes = courseContainer.querySelectorAll('.course-box');

    // Sort the course boxes based on their name
    const sortedBoxes = Array.from(courseBoxes).sort((a, b) => {
        const aName = a.querySelector('h4').textContent;
        const bName = b.querySelector('h4').textContent;
        return ascendingOrder ? aName.localeCompare(bName) : bName.localeCompare(aName);
    });

    // Clear the container element and add the sorted boxes back in
    courseContainer.innerHTML = '';
    sortedBoxes.forEach(box => {
        courseContainer.appendChild(box);
    });

    // Reverse the order of sorting for the next time the button is clicked
    ascendingOrder = !ascendingOrder;
}

//Event listener for sort by level button
const sortByLevelButton = document.querySelector("#sort-level");
sortByLevelButton.addEventListener('click', sortByLevel);

//Event listener for sort by code button
const sortByCodeButton = document.querySelector("#sort-code");
sortByCodeButton.addEventListener('click', sortByCode);

//Event listener for sort by name button
const sortByNameButton = document.querySelector("#sort-name");
sortByNameButton.addEventListener('click', sortByName);