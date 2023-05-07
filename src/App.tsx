import "./App.css";
import Card from "./components/card1";

function App() {
  return (
    <div className="container">
      <div className="header">
        <a href="/" title="main page"><h1>WeatherWatch</h1></a>
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
