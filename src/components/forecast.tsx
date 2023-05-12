import axios from "axios";
import { useEffect } from "react";
import { getForecastData } from "../api/forecastApi";
import { keyAPI } from "../api/api"



function forecast() {

async function test () {    
    const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=Новосибирск&days=1&aqi=no&alerts=no`;

    const data = await axios.get(forecastURL)
    .then(response => {
        return response
    })
    .catch(error => {
        console.error(error)
    })
    return data
}

  return (
  <div>
    
  </div>
  )
}

export default forecast;
