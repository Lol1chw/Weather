import { useEffect } from "react";
import { getForecastData } from "../api/forecastApi";
import { forecastSelectors } from "../store/forecastStore";
import { selectors } from "../store/store";

function forecast() {
  const option = forecastSelectors.option();
  const setOption = forecastSelectors.setOption();
  const city = selectors.city();

  useEffect(() => {
    const fetchForecastData = async () => {
      const data = await getForecastData(city);
      setOption(data);
    };
    fetchForecastData();
  }, [city]);

  return <div></div>;
}

export default forecast;
