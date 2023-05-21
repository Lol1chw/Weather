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
          <a href="/" title="Главная страница">
            <h1>WeatherWatch</h1>
          </a>
          <span>{`${weather.stockTime}`}</span>
        </div>
        <ToggleWeather />
      </div>
      <ToggleTemp />
      <Search />
      <Card />
      <MiniCards />
    </div>
  );
}

export default App;
