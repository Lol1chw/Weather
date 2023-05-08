import.meta.env.VITE_API_KEY;
export const keyAPI = import.meta.env.VITE_API_KEY;
import axios from "axios";

import {
  time2,
  makeIconUrl,
  convertMilesToMeters,
  convertMbToMm,
} from "./converters";



interface location {
  country: string;
  name: string;
  localtime: string;
  region: string;
}

interface current {
  temp_c: number;
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

  const data = await axios.get(URL).then(res => {
    return res.data
  })
  .catch(error => {
    console.error(error)
  })

  const {
    location: { country, name, localtime, region },
    current: { temp_c, wind_mph, humidity, feelslike_c, vis_km, pressure_mb },
    current: {
      condition: { icon, text },
    },
  }: DataTypes = data;

  return {
    iconURL: makeIconUrl(icon),
    country,
    name,
    localtime: time2(localtime),
    temp_c,
    text,
    wind_mph: convertMilesToMeters(wind_mph),
    humidity,
    vis_km,
    feelslike_c,
    pressure_mb: convertMbToMm(pressure_mb),
    region,
  };
};
