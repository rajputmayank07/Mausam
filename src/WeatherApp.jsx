
import SearchBox from './Searchbox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Bhopal",
        feelsLike: 18.31,
        temp: 19.35,
        tempMin: 19.35,
        tempMax: 19.35,
        humidity: 37,
        weather: "overcast clouds",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather Widget</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}