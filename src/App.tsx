import "./styles/App.css";
import Search from "./components/search";
import Card from "./components/card";
import MiniCards from "./components/miniCards";
import ToggleTemp from "./components/temperatureButton";
import ToggleWeather from './components/weatherToggle'
import { selectors } from "./store/store";

function App() {
  const weather = selectors.weather();

  return (
    <div className="container">
      <div className="header">
        <div className="tittle">
            <h1>WeatherWatch</h1>
          <span className="time">{`${weather.stockTime}`}</span>
          <ToggleTemp />
        </div>
        <ToggleWeather />
      </div>
      <Search />
      <Card />
      <MiniCards />
    </div>
  );
}

export default App;
