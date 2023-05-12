import axios from "axios";
import { keyAPI } from "./api";
import { selectors } from '../store/store'
import forecast from "../components/forecast";
import { makeIconUrl } from "./converters";

interface forecastData {
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
        forecast: { 
            forecastday:  [
                { hour: [...resHours] }
            ]
        },
    }: forecastData = data
    
    return {
        iconURL: makeIconUrl(resHours[0].condition.icon)
    }
}

