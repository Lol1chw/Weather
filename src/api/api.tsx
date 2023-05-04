import { time, makeIconUrl, convertMilesToMeters, convertMbToMm } from "./converters";

import.meta.env.VITE_API_KEY;
export const keyAPI = import.meta.env.VITE_API_KEY;

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

export const getWeatherData = async (city: any) => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${keyAPI}&lang=ru&q=${city}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data: any) => data);

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
    localtime: time(localtime),
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

export default interface dataAsign {
  icoURL: string;
  country: string;
  region: string;
  localtime: Date;
  temp_c: number;
}
