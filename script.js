const apiKey = "091d2230e0124dc094f32111260705";

async function getWeather() {

    const cityInput = document.getElementById("cityInput").value;

    if(cityInput === ""){
        alert("Please enter a city name");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=yes`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("city").innerText =
            data.location.name + ", " + data.location.country;

        document.getElementById("temp").innerText =
            data.current.temp_c + "°C";

        document.getElementById("condition").innerText =
            data.current.condition.text;

        document.getElementById("humidity").innerText =
            data.current.humidity + "%";

        document.getElementById("wind").innerText =
            data.current.wind_kph + " km/h";

        const condition = data.current.condition.text.toLowerCase();

        let icon = "☀️";

        if(condition.includes("cloud")){
            icon = "☁️";
        }
        else if(condition.includes("rain")){
            icon = "🌧️";
        }
        else if(condition.includes("storm")){
            icon = "⛈️";
        }
        else if(condition.includes("snow")){
            icon = "❄️";
        }

        document.querySelector(".weather-icon").innerText = icon;

    }

    catch(error){
        alert("City not found!");
    }

}