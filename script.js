let weather = {
    apiKey: "34f4171eddee34a684f106b28e1db599",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon , description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".City").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "℃";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage= "url(https://source.unsplash.com/1600x900/?" + name+ ",landscape)"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".input").value);
    },
}

document.querySelector(".box button").addEventListener("click", function (){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter"){
    weather.search();
}})
