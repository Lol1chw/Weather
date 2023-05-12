import "./App.css";
import Card from "./components/card1";
import Forecast from "./components/forecast";
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
        <div className="navMenu">
          <a>Today</a>
          <a>Tommorow</a>
        </div>
      </div>
      <Card />
      <Forecast />
    </div>
  );
}

export default App;
