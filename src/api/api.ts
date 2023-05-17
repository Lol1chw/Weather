import.meta.env.VITE_API_KEY;
export const keyAPI = import.meta.env.VITE_API_KEY;
import axios from "axios";

import {
  pmAmFormat,
  makeIconUrl,
  convertMilesToMeters,
  convertMbToMm,
  formatDateLocale,
  roundTemp,
} from "../converters/converters";

interface location {
  country: string;
  name: string;
  localtime: string;
  region: string;
}

interface current {
  temp_c: number;
  temp_f: number;
  wind_mph: number;
  humidity: number;
  feelslike_c: number;
  vis_km: number;
  pressure_mb: number;
  condition: {
    icon: string;
    text: string;
  };
}

interface DataTypes {
  location: location;
  current: current;
}

export const getWeatherData = async (city: string) => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${keyAPI}&lang=ru&q=${city}`;

  const data = await axios
    .get(URL)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });

  const {
    location: { country, name, localtime, region },
    current: {
      temp_c,
      temp_f,
      wind_mph,
      humidity,
      feelslike_c,
      vis_km,
      pressure_mb,
    },
    current: {
      condition: { icon, text },
    },
  }: DataTypes = data;

  let stockTime = pmAmFormat(localtime);
  let convertedTime = formatDateLocale(localtime);

  return {
    iconURL: makeIconUrl(icon),
    country,
    name,
    localtime,
    convertedTime,
    stockTime,
    temp_c: roundTemp(temp_c),
    temp_f: roundTemp(temp_f),
    text,
    wind_mph: convertMilesToMeters(wind_mph),
    humidity,
    vis_km,
    feelslike_c,
    pressure_mb: convertMbToMm(pressure_mb),
    region,
  };
};
