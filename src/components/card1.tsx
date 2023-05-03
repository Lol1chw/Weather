import { useState, useEffect } from "react";
import { getWeatherData } from "../api/api";
import thermometr from "../assets/thermometr2.svg";
import geo from "../assets/geo.svg";
import Search from "./search";

function card() {
  const [weather, setWeather]: any = useState("");
  const [city, setCity]: any = useState("Новосибирск");

  // Fetch data. Check api.tsx
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city);
      setWeather(data);
    };
    fetchWeatherData();
  }, [city]);

  // Enter perfroms the search function which is in another component (Search)
  const enter = (e: any) => {
    if (e.key === "Enter") {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <Search setCity={setCity} />
      <div className="CardContainer">
        <div className="Card">
          <div className="geoLocation">
            {`${weather.name}`}
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
          <div className="dayInfo">{`${weather.localtime}`}</div>
          <div className="nameBottom">
            <div className="dataBottom">{`Влажность ${weather.humidity}%`}</div>
            <div className="dataBottom">{`Видимость ${weather.vis_km} км`}</div>
            <div className="dataBottom">{`Давление ${weather.pressure_mb} мб`}</div>
            <div className="dataBottom">{`Ветер ${weather.wind_mph} м`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
