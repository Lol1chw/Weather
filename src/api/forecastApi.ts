import axios from "axios";
import { keyAPI } from "./api";
import { makeIconUrl } from "../converters/converters";

interface WeatherData {
  [key: string]: string | number;
}

interface HourData {
  time: string;
  condition: {
    icon: string;
  };
  temp_c: number;
  temp_f: number;
}

interface ForecastDayData {
  hour: HourData[];
}

interface ForecastData {
  forecast: {
    forecastday: ForecastDayData[];
  };
}

export const getForecastData = async function (city: string) {
  const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=${city}&days=1&aqi=no&alerts=no`;

  const data = await axios
    .get(forecastURL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });

  const {
    forecast: {
      forecastday: [{ hour }],
    },
  }: ForecastData = data;

  const times = [];
  const icons = [];
  const temp_c = [];
  const temp_f = [];

  for (let i = 1; i <= 22; i += 3) {
    const {
      time,
      condition: { icon },
      temp_c: temperature_c,
      temp_f: temperature_f,
    } = hour[i];
    times.push(time);
    icons.push(makeIconUrl(icon));
    temp_c.push(temperature_c);
    temp_f.push(temperature_f);
  }

  const formatData = (prefix: string, values: (string | number)[]) => {
    const formattedData: WeatherData = {};
    values.forEach((value, index) => {
      const key = `${prefix}${index + 1}`;
      formattedData[key] = value;
    });

    return formattedData;
  };

  const timeData = formatData("time", times);
  const iconData = formatData("icon", icons);
  const tempData = formatData("temp_c", temp_c);
  const tempfData = formatData("temp_f", temp_f);
  return { ...timeData, ...iconData, ...tempData, ...tempfData };
};
