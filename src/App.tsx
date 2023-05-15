import "./styles/App.css";
import Search from "./components/search";
import Card from "./components/card1";
import MiniCards from "./components/miniCards";
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
        <div className="navigationMenu">
          <a>Today</a>
          <a>Tommorow</a>
        </div>
      </div>
      <Search />
      <Card />
      <MiniCards />
    </div>
  );
}

export default App;
