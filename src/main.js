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
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');
const coord = document.querySelector('.coord');

//Weather API key
let apiKey = "a72eacb9d82e854fa98860dc2139989e";

//Default city when the page loads
let cityInput = "Oslo";



fetchWeatherData();

//Add click event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        //Change city when clicking on a city
        cityInput = e.target.innerHTML;
        /* Function that fetches and displays data from the Weather API*/
        fetchWeatherData();

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
        search.value = "";

    }
//Prevent default behavior
e.preventDefault();
        
    });

    /*Function that returns day of the week from a date */

    function weekdays(day, month, year) {
        const weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
    ];
    return weekday[new Date (`${day}/${month}/${year}`).getDay()];
    };

    // Function that fetches and displays data from the weather API

    function fetchWeatherData(units){

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        //Take the data (in JSON format and convert it into regular JS objects
        .then(response => response.json())
        .then(data => {
            //console log data to see avaliable variables
            console.log(data);

             //Create tempElem that holds the temp in celcius to use later
            temperatureElem = data.main.temp;

            //Adding temperature and weather condition to page
            temp.innerHTML = Math.round(temperatureElem) + "&#176";
            nameOutput.innerHTML = data.name;
            conditionOutput.innerHTML = data.weather[0].description;
            
            //Get correct iconId
            const iconId = data.weather[0].icon;
            //URL from API without details
            let iconURL = "http://openweathermap.org/img/wn/";
            //Create path with correct info
            let iconPath = iconURL + iconId + "@2x.png";
            //Add emoji to emoji img in html
            emoji.src = iconPath;


            //Get the humidity from API and change html attribute to correct data
            humidity.innerHTML = data.main.humidity + "%";
            windOutput.innerHTML = Math.round(data.wind.speed) + " km/h";
            coord.innerHTML = data.coord.lat + ", " + data.coord.lon;

            
        
        }); }


        function showFahrenheitTemp(event){
            event.preventDefault();
            // fetchWeatherData()
            const farenheit = (temperatureElem * 9) /5 + 32 ;
            const tempElement = document.querySelector(".temp");
            tempElement.innerHTML = Math.round(farenheit) + "&#176" ;
        }

      let temperatureElem = null;

    function showCelcius(event) {
        event.preventDefault();
         const tempElement = document.querySelector(".temp");
         tempElement.innerHTML = Math.round(temperatureElem) + "&#176" ;

    }
        //Convert C to F and vise versa

        const farenheitLink = document.querySelector("#farenheit");
        farenheitLink.addEventListener("click", showFahrenheitTemp);

        const celciusLink = document.querySelector("#celcius");
        celciusLink.addEventListener("click", showCelcius);



        
        

        

