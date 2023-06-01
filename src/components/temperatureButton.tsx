import { selectors } from "../store/store";

function toggleTemp() {
  const isCelsius = selectors.isCelsius();
  const toggleFormat = selectors.toggleFormat();

  const handleClick = () => {
    toggleFormat();
  };

  const celciusGradient = "linear-gradient(90deg, #33E017 0%, rgba(149, 241, 134, 0) 100%)";
  const farenheitGradient = "#000000";

  const buttonStyle = {
    background: isCelsius ? celciusGradient : farenheitGradient,
    borderRadius: "22px",
    width: "92px",
    height: "30px",
    border: "none",
    outline: "none",
    padding: 0,
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <div className="tempButton">
      <span>°C</span>
      <button title="toggle temperature button" style={buttonStyle} onClick={handleClick}>
        <div
          className={`toggle-ball ${isCelsius ? "celsius" : "fahrenheit"}`}
        />
      </button>
      <span>°F</span>
    </div>
  );
}

export default toggleTemp;
