import { useState, useEffect } from "react";
import { getWeatherData } from "../api/api";
import dropWater from "../assets/drop-Water.svg";
import wind from "../assets/wind.svg";
import thermometr from "../assets/thermometer-thermometer.svg";
import arrow from '../assets/arrow-rightInvalid.svg'

function card() {
  const [weather, setWeather]: any = useState("");
  const [city, setCity]: any = useState("Новосибирск");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city);
      setWeather(data);
    };
    fetchWeatherData();
  }, [city]);

  const enter = (e: any) => {
    if (e.key === "Enter") {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <div className="searchContainer">
        <div className="searchPanel">
          <input
            className="search"
            name="city search"
            type="search"
            placeholder="Search"
            onKeyDown={enter}
          ></input>
        </div>
      </div>
      <div className="CardHolder">
        <div className="Card">
          <div className="headCard">
            <h1 className="residence">
              {`${weather.name} ${weather.localtime}`}{" "}
            </h1>
            <img
              src={weather.iconURL}
              width="64px"
              height="64px"
              alt="icon display weather and time"
            ></img>
          </div>
          {/* <div>{`${weather.text}`}</div> */}
          <div className="boxMainWeather">
            {`${weather.temp_c} °C`} <img src={thermometr} width="32px"></img>
          </div>
          {/* <span className="feelslike">{`Ощущается как: ${weather.feelslike_c} °C`}</span> */}
          <div className="boxWind">
            {`Ветер: ${weather.wind_mph} м/ч`}
            {/* <img
              src={wind}
              className="boxWind"
              width="32px"
              alt="icon wind"
            ></img> */}
          </div>
          <div className="boxHumidity">
            <div>{`Влажность: ${weather.humidity} %`}</div>
            {/* <img
              src={dropWater}
              className="iconDropWater"
              width="32px"
              alt="icon dropwater"
            ></img> */}
          </div>
          <div className="Visual">
            
            <img src={arrow} width='42px' height='42px'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
