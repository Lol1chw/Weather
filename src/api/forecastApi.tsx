import axios from "axios";
import { keyAPI } from "./api";

interface Times {
  [key: string]: {
    time: string;
  };
}

interface Icon {
  [key: string]: {};
}

interface ForecastData {
  forecast: {
    forecastday: {
      hour: {
        [key: string]: {
          time: string;
          temp_c: number;
          icon: string;
        };
      }[];
    }[];
  };
}

export const getForecastData = async function (city: string) {
  const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=${city}&days=1&aqi=no&alerts=no`;

  const data = await axios.get(forecastURL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });

  const {
    forecast: {
      forecastday: [
        {
          hour: [...resHours],
        },
      ],
    },
  }: ForecastData = data;

  const times: Times = {};
  for (let i = 1; i <= 22; i += 3) {
    times[`time${i}`] = resHours[i].time;
  }
  const icons: Icon = {};
  for (let j = 1; j <= 22; j += 3) {
    icons[`icon${j}`] = resHours[j].condition.icon;
  }

  return {
    icons,
    times,
  };
};
