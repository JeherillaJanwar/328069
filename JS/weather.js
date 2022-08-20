//for date & time manupulation
let days = "Sat Sun Mon Tue Wed Thu Fri".split(" ");
const date = new Date();
const day = date.getDate();
const week = date.getDay();
const month = date.toLocaleString("default", { month: "short" }).split(".")[0];
console.log(days[week], day, month);
const finalDate = days[week] + ", " + day + " " + month;

//jquery manupulation
$(document).ready(function() {
  // Get Location (asks for location access !!

  navigator.geolocation.getCurrentPosition(success, error, {
    maximumAge: 60000,
    timeout: 5000,
    enableHighAccuracy: true
  });

  function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
  }

  function error(err) {
    console.log(err);
    console.log("There was an error");
  }

  // Call Weather
  function weather(lat, long) {
    var URL = `https://api.openweathermap.org/data/2.5/weather?APPID=bc491408821cc43317006173fd1c5bef&lat=${lat}&lon=${long}&units=metric`;

    $.getJSON(URL, function(data) {
      updateDOM(data);
    });
  }

  // Update Dom
  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp);
    var desc = data.weather[0].description;
    var max = Math.round(data.main.temp_max);
    var min = Math.round(data.main.temp_min);
    // Math.fl
    var pressure = data.main.pressure;

    var wind = data.wind.speed;
    var humid = data.main.humidity;

    if (temp > 15) {
      greeting = "No Jacket Necessary";
    } else if (temp < 5) {
      greeting = "Heavy Jacket";
    } else {
      greeting = "light jacket";
    }

    console.log(data);
    $("#city").html(city.toUpperCase());
    $("#temp").html(temp + "°");
    $("#desc").html(desc.toUpperCase());
    // $("#wear").html(greeting);
    $("#min").html(min + "°");

    $("#max").html(min + "°");
    $("#pressure").html(pressure + " km/h");

    $("#wind_speed").html(wind + " km/h");
    $("#humid").html(humid + "%");
    $("#time").html(finalDate);

  }
});















