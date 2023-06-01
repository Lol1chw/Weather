import "../styles/forecast.css";
import { useEffect } from "react";
import { getForecastData } from "../api/forecastApi";
import { forecastSelectors } from "../store/forecastStore";
import { selectors } from "../store/store";
import { pmAmFormat, roundTemp } from "../converters/converters";

interface ForecastProps {
  time: string;
  icon: string;
  temp_c: number;
}

function forecast({ time, icon, temp_c }: ForecastProps) {
  const setOption = forecastSelectors.setOption();
  const city = selectors.city();

  useEffect(() => {
    const fetchForecastData = async () => {
      const data = await getForecastData(city);
      setOption(data);
    };
    fetchForecastData();
  }, [city]);

  return (
    <div className="containerMiniCard">
      <div className="mini">
        <p>{pmAmFormat(time)}</p>
        <div className="iconForecast">
          <img alt="icon display weather and time" src={icon} width="64px" height="64px" />
        </div>
        <div className="temp">{`${roundTemp(temp_c)}°`}</div>
      </div>
    </div>
  );
}

export default forecast;
