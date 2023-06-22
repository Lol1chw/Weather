import "../styles/forecast.css";
import { useEffect } from "react";
import { getForecastData } from "../api/forecastApi";
import { forecastSelectors } from "../store/forecastStore";
import { selectors } from "../store/store";
import { pmAmFormat, roundTemp } from "../converters/converters";
import { loadingSelectors } from "../store/loadingStore";

interface ForecastProps {
  time: string;
  icon: string;
  temp_c: number;
}

function forecast({ time, icon, temp_c }: ForecastProps) {
  const setOption = forecastSelectors.setOption();
  const city = selectors.city();
  const loading = loadingSelectors.isLoading();
  const setLoading = loadingSelectors.setLoading();

  useEffect(() => {
    const fetchForecastData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = await getForecastData(city);
      setOption(data);
      setLoading(false);
    };
    fetchForecastData();
  }, [city]);

  if (loading) {
    return (
      <div className="containerMiniCard">
        <div className="mini"></div>
      </div>
    );
  }

  return (
    <div className="containerMiniCard">
      <div className="mini">
        <p>{pmAmFormat(time)}</p>
        <div className="iconForecast">
          {icon ? (
            <img
              alt="icon display weather and time"
              src={icon}
              width="64px"
              height="64px"
            />
          ) : (
            ""
          )}
          <img />
        </div>
        {temp_c ? <div className="temp">{`${roundTemp(temp_c)}°`}</div> : ""}
      </div>
    </div>
  );
}

export default forecast;
