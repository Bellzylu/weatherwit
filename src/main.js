// Get all necessary elements from the DOM

const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const emoji = document.querySelector('.emoji');
const cloudOutput = document.querySelector('.cloud');
const humidity = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('.locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.city');

//Default city when the page loads

let cityInput = "London";

//Add click event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        //Change city when clicking on a city
        cityInput = e.target.innerHTML;
        /* Function that fetches and displays data from the Weather API*/
        fetchWeatherData();
        //Fade out app with animation
        app.style.opacity = "0";

    });
})

//Submit event to form
form.addEventListener('submit', (e) => {
    //Throw alert if search field is empty
    if(search.value.length == 0) {
        alert("Please type a city name");
    } else {
        //Change city to the city typed in
        cityInput = search.value;
        //Call api function
        fetchWeatherData();
        //Remove all text from input field
        search.value = "0";
//Fade out app with animation
app.style.opacity = "0";
    }
//Prevent default behavior
e.preventDefault();
        
    });

    /*Function that returns day of the week from a date */

    function weekdays(day, month, year) {

    }

