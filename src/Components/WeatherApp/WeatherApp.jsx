import React, { useState } from 'react'
import './WeatherApp.css'

const WeatherApp = () => {
    let api_key= "07e5e0efa1b63711cd20643a80e6e788";
    const [weatherIcon, setWeatherIcon] = useState(null); // State for weather icon


    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temperature[0].innerHTML = data.main.temp + "°c";
        location[0].innerHTML = data.name;

        setWeatherIcon(data.weather[0].icon); // Update weather icon state
        updateBackgroundGradient(data.weather[0].icon); // Update backgr
       

        
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    }

    const updateBackgroundGradient = (weatherIcon) => {
        const body = document.querySelector('body');

        if (weatherIcon === "01d" || weatherIcon === "01n") {
            // Clear sky gradient
            body.style.backgroundImage = "linear-gradient(180deg, #87CEEB 0%, #87CEEB 100%)";
        } else if (weatherIcon === "02d" || weatherIcon === "02n") {
            // Few clouds gradient
            body.style.backgroundImage = "linear-gradient(180deg, #B0E0E6 0%, #87CEEB 100%)";
        } else if (weatherIcon === "03d" || weatherIcon === "03n") {
            // Scattered clouds gradient
            body.style.backgroundImage = "linear-gradient(180deg, #B0C4DE 0%, #87CEEB 100%)";
        } else if (weatherIcon === "04d" || weatherIcon === "04n") {
            // Broken clouds gradient
            body.style.backgroundImage = "linear-gradient(180deg, #778899 0%, #708090 100%)";
        } else if (weatherIcon === "09d" || weatherIcon === "09n") {
            // Shower rain gradient
            body.style.backgroundImage = "linear-gradient(180deg, #4682B4 0%, #1E90FF 100%)";
        } else if (weatherIcon === "10d" || weatherIcon === "10n") {
            // Rain gradient
            body.style.backgroundImage = "linear-gradient(180deg, #000080 0%, #4169E1 100%)";
        } else if (weatherIcon === "11d" || weatherIcon === "11n") {
            // Thunderstorm gradient
            body.style.backgroundImage = "linear-gradient(180deg, #191970 0%, #000080 100%)";
        } else if (weatherIcon === "13d" || weatherIcon === "13n") {
            // Snow gradient
            body.style.backgroundImage = "linear-gradient(180deg, #D3D3D3 0%, #FFFFFF 100%)";
        } else if (weatherIcon === "50d" || weatherIcon === "50n") {
            // Mist gradient
            body.style.backgroundImage = "linear-gradient(180deg, #E0E0E0 0%, #F5F5F5 100%)";
        }
    }

    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='Hit "Enter"' onKeyPress={handleKeyPress} />
            </div>
            <div className='weather-temp'>0°c</div>
            <div className='weather-location'>City</div>
            <div className='data-container'>
                <div className='element'>
                    <div className='data'>
                        <div className='humidity-percent'>0%</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <div className='data'>
                        <div className='wind-rate'>0 km/h</div>
                        <div className='text'>Wind speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WeatherApp