var button = document.querySelector("#btn-search")
var userFormEl = document.querySelector("#serch-box")
var weatherContanerEl = document.querySelector("#weather-contaner")



//funcnction that will get the info from the serch box
var serchCity = function (event) {
    event.preventDefault();

    //get value from the input
    var cityName = userFormEl.value.trim();

    if (cityName) {
        getCurrentWeather(cityName);

        //clear old content
        weatherContanerEl.textContent = "";
        userFormEl.value = "";
    } else {
        alert("Please Enter a City name")
    }
};


 // show current weather 
var getCurrentWeather = function() {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a0f1ca61bbf24d8e8dfe226c2cf4089a`

    apiUrl.valueOf("cityname")
    console.log("getCurrentWeather")
    console.log(apiUrl.valueOf("cityname"))

    
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
              console.log(data)  
            });
        } else {
            alert("error: " + response.statusText);
        }
    });
};

var displayWeather = function(city, searchTerm) {
    //check if it is a city
    if (city === 0) {
        weatherContanerEl.textContent = "No City Found."
        return;
    }

    userFormEl.textContent = searchTerm;
    
    //ceate a elemint to display current weather
    var titleEl = document.createElement("span")
    titleEl.textContent = city;

     cityEl.appendChild(titleEl);
    titleEl.classList = "flex-row"

}

 



 // make for loop to display the 5 day for cast


button.addEventListener("click", serchCity)
    


 // function