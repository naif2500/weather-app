import React from 'react'
import './WeatherApp.css'

const WeatherApp = () => {
    let api_key= "07e5e0efa1b63711cd20643a80e6e788";
    const search = async () =>{
        const element =document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
        let response = await fetch(url);
        let data = await response.json();
        const humidity =document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        
        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" km/h";
        temperature[0].innerHTML = data.main.temp+ "°c";
        location[0].innerHTML = data.name;
    }
    
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='søg'/>
        <div className=' search-icon' onClick={()=>{search()}}>
            Søg
        </div>
      </div>
      <div className='weather-temp'>24°c</div>
      <div className='weather-location'>London</div> 
      <div className='data-container'>
        <div className='element'>
            <div className='data'>
                <div className='humidity-percent'>64%</div>
                <div className='text'>Humidity</div>
            </div>
        </div>
        <div className='element'>
            <div className='data'>
                <div className='wind-rate'>18 km/h</div>
                <div className='text'>Wind speed</div>
            </div>
        </div>
      </div>


    </div>
  );
}
export default WeatherApp