import.meta.env.VITE_API_KEY;

export const keyAPI = import.meta.env.VITE_API_KEY;

const makeIconUrl = (iconId: string) => `${iconId}`;

function time(localtime: string) {
  return localtime.substring(11, 16);
}

export const getWeatherData = async (city: string) => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${keyAPI}&lang=ru&q=${city}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data: any) => data);

  const {
    location: { country, name, localtime },
    current: { temp_c, wind_mph, humidity, feelslike_c },
    current: {
      condition: { icon, text },
    },
  } = data;

  return {
    iconURL: makeIconUrl(icon),
    country,
    name,
    localtime: time(localtime),
    temp_c,
    text,
    wind_mph,
    humidity,
    feelslike_c,
  };
};

export default interface dataAsign {
  icoURL: string;
  country: string;
  region: string;
  localtime: Date;
  temp_c: number;
}
