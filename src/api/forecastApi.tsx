import axios from "axios";
import { keyAPI } from "./api";
import { selectors } from '../store/store'
import forecast from "../components/forecast";

interface forecastData {
  location: {
    country: string;
  };
  forecast: {
    forecastday: [
      { hour: [{ time: string; temp_c: number; condition: {icon: string} }] }
    ];
  };
}

export const getForecastData = async function() {
    const city = selectors.city()
    const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=${city}&days=1&aqi=no&alerts=no`;

    const data = await axios.get(forecastURL)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.error(error)
    })
    

    const {
        location: {country},
        forecast: { 
            forecastday:  [
                { hour: [...resHours] }
            ]
        },
    }: forecastData = data
    
    return {
        country,
        forecast,
    }
}

