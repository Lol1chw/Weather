import { useEffect } from "react";
import { getWeatherData } from "../api/api";
import thermometr from "../assets/thermometr2.svg";
import geo from "../assets/geo.svg";
import { selectors } from "../store/store";
import { forecastSelectors } from "../store/forecastStore";
import { roundTemp, formatDateLocale } from '../converters/converters';

function card() {
  const weather = selectors.weather();
  const setWeather = selectors.setWeather();
  const city = selectors.city();
  const isCelsius = selectors.isCelsius();
  const isToday = selectors.isToday();
  const option = forecastSelectors.option();

  const temperature = isCelsius ? `${weather.temp_c}°C` : `${weather.temp_f}°F`;
  const avgTemperature = isCelsius ? `${roundTemp(option.avgtemp_c)}°C` : `${roundTemp(option.avgtemp_f)}°F`

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
            <img alt="geolocation marker icon" src={geo}></img>
          </div>
          <div className="mainInfoTemp">
            <img alt="thermometer temperature icon" src={thermometr} width="44px" height="44px"></img>
            <div>{isToday ? temperature : avgTemperature}</div>
            <img
              src={isToday ? weather.iconURL : option.icon}
              width="64px"
              height="64px"
              alt="icon display weather and time"
            ></img>
          </div>
          <div className="dayInfo">{isToday ? `${weather.convertedTime}` : `${formatDateLocale(option.date)}`}</div>
          <div className="moreWeatherInfo">
            <div className="blockWeatherInfo">{isToday ? `Влажность ${weather.humidity}%` : ``}</div>
            <div className="blockWeatherInfo">{isToday ? `Видимость ${weather.vis_km} км` : ``}</div>
            <div className="blockWeatherInfo">{isToday ? `Давление ${weather.pressure_mb} мм` : ``}</div>
            <div className="blockWeatherInfo">{isToday ? `Ветер ${weather.wind_mph} м/с` : ``}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
