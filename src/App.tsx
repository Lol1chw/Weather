import "./App.css";
import Card from "./components/card1";
import { selectors } from './components/store'

function App() {
  const weather = selectors.weather()
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
      <Card/>
    </div>
  );
}

export default App;
