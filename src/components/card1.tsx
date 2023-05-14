import { useEffect } from "react";
import { getWeatherData } from "../api/api";
import thermometr from "../assets/thermometr2.svg";
import geo from "../assets/geo.svg";
import { selectors } from "../store/store";

function card() {
  const weather = selectors.weather();
  const setWeather = selectors.setWeather();
  const city = selectors.city();

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city);
      setWeather(data);
    };
    fetchWeatherData();
  }, [city]);

  return (
    <div>
      <div className="CardContainer">
        <div className="Card">
          <div className="geoLocation">
            {`${weather.name}, ${weather.country}`}
            <img src={geo}></img>
          </div>
          <div className="mainInfoTemp">
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
          <div className="moreWeatherInfo">
            <div className="blockWeatherInfo">{`Влажность ${weather.humidity}%`}</div>
            <div className="blockWeatherInfo">{`Видимость ${weather.vis_km} км`}</div>
            <div className="blockWeatherInfo">{`Давление ${weather.pressure_mb} мм`}</div>
            <div className="blockWeatherInfo">{`Ветер ${weather.wind_mph} м/с`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
