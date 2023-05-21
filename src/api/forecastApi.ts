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

interface ElementsData {
  times: string[];
  icons: string[];
  temp_c: number[];
  temp_f: number[];
  timesD2: string[];
  iconsD2: string[];
  temp_cD2: number[];
  temp_fD2: number[];
}

export const getForecastData = async function (city: string) {
  const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=${city}&days=2&aqi=no&alerts=no`;

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

  const elementsData: ElementsData = {
    times: [],
    icons: [],
    temp_c: [],
    temp_f: [],
    timesD2: [],
    iconsD2: [],
    temp_cD2: [],
    temp_fD2: [],
  };

  for (let i = 1, j = 1; i <= 22 && j <= 22; i += 3, j += 3) {
    const {
      time: time1,
      condition: { icon: icon1 },
      temp_c: temperature_c1,
      temp_f: temperature_f1,
    } = hour[i];

    const {
      time: time2,
      condition: { icon: icon2 },
      temp_c: temperature_c2,
      temp_f: temperature_f2,
    } = data.forecast.forecastday[1].hour[j];

    elementsData.times.push(time1);
    elementsData.icons.push(makeIconUrl(icon1));
    elementsData.temp_c.push(temperature_c1);
    elementsData.temp_f.push(temperature_f1);

    elementsData.timesD2.push(time2);
    elementsData.iconsD2.push(makeIconUrl(icon2));
    elementsData.temp_cD2.push(temperature_c2);
    elementsData.temp_fD2.push(temperature_f2);
  }

  const formatData = (prefix: string, values: (string | number)[]) => {
    const formattedData: WeatherData = {};
    values.forEach((value, index) => {
      const key = `${prefix}${index + 1}`;
      formattedData[key] = value;
    });

    return formattedData;
  };
  console.log(elementsData);
  const timeDataD2 = formatData("timeDay2_", elementsData.timesD2);
  const iconDataD2 = formatData("iconDay2_", elementsData.iconsD2);
  const tempcDataD2 = formatData("temp_cDay2_", elementsData.temp_cD2);
  const tempfDataD2 = formatData("temp_fDay2_", elementsData.temp_fD2);

  const timeData = formatData("time", elementsData.times);
  const iconData = formatData("icon", elementsData.icons);
  const tempcData = formatData("temp_c", elementsData.temp_c);
  const tempfData = formatData("temp_f", elementsData.temp_f);

  return {
    ...timeData,
    ...iconData,
    ...tempcData,
    ...tempfData,
    ...timeDataD2,
    ...iconDataD2,
    ...tempcDataD2,
    ...tempfDataD2,
  };
};
