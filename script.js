
//openweathermap.org personal API
var APIkey = "560f643e1e1ea13b7ef0f4381de0a2d4";

//Buidling the URL needed to query the datbase
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key" + APIkey;

// elements by id
//id="form-heading"
// id="search-form"
// id="search-input"
// id="search-button"
// id="history"
// id="today"
// id="forecast"

// //buttons
let searchBtn = document.querySelector(".btn search-button")

searchBtn.addEventListener("click", function (event) {

  if (event.target.matches("searchBtn")) {
    console.log(event.target.textContent);
  }

})