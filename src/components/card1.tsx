import { useEffect } from "react";
import { getWeatherData } from "../api/api";
import thermometr from "../assets/thermometr2.svg";
import geo from "../assets/geo.svg";
import Search from "./search";
import {selectors} from './store'

function card() {
  const weather = selectors.weather();
  const setWeather = selectors.setWeather();
  const city = selectors.city();

  // Fetch data. Extracting data from getWeatherData. Check api.tsx
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city);
      setWeather(data);
    };
    fetchWeatherData();
  }, [city]);

  return (
    <div>
      <Search/>
      <div className="CardContainer">
        <div className="Card">
          <div className="geoLocation">
            {`${weather.name}, ${weather.country}`}
            <img src={geo}></img>
          </div>
          <div className="mainCenter">
            <img src={thermometr} width="44px" height="44px"></img>
            {`${weather.temp_c}°C`}
            <img
              src={weather.iconURL}
              width="64px"
              height="64px"
              alt="icon display weather and time"
            ></img>
          </div>
          <div className="dayInfo">{`${weather.convertedTime}`}</div>
          <div className="nameBottom">
            <div className="dataBottom">{`Влажность ${weather.humidity}%`}</div>
            <div className="dataBottom">{`Видимость ${weather.vis_km} км`}</div>
            <div className="dataBottom">{`Давление ${weather.pressure_mb} мм`}</div>
            <div className="dataBottom">{`Ветер ${weather.wind_mph} м/с`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
