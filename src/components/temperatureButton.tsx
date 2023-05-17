import { selectors } from "../store/store";

function toggleTemp() {
  const isCelsius = selectors.isCelsius();
  const toggleFormat = selectors.toggleFormat();

  const handleClick = () => {
    toggleFormat();
  };

  return (
    <div>
      <button onClick={handleClick}>
        Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
}

export default toggleTemp;
