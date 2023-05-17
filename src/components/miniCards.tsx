import Forecast from "./forecast";
import { forecastSelectors } from "../store/forecastStore";
import { selectors } from "../store/store";

function miniCards() {
  const option = forecastSelectors.option();
  const isCelsius = selectors.isCelsius();
  const temperatures = [];

  for (let i = 1; i <= 8; i++) {
    const checkArray = isCelsius ? option[`temp_c${i}`] : option[`temp_f${i}`];
    temperatures.push(checkArray);
  }

  return (
    <div className="containerMiniCards">
      <Forecast
        time={option.time1}
        icon={option.icon1}
        temp_c={temperatures[0]}
      />
      <Forecast
        time={option.time2}
        icon={option.icon2}
        temp_c={temperatures[1]}
      />
      <Forecast
        time={option.time3}
        icon={option.icon3}
        temp_c={temperatures[2]}
      />
      <Forecast
        time={option.time4}
        icon={option.icon4}
        temp_c={temperatures[3]}
      />
      <Forecast
        time={option.time5}
        icon={option.icon5}
        temp_c={temperatures[4]}
      />
      <Forecast
        time={option.time6}
        icon={option.icon6}
        temp_c={temperatures[5]}
      />
      <Forecast
        time={option.time7}
        icon={option.icon7}
        temp_c={temperatures[6]}
      />
      <Forecast
        time={option.time8}
        icon={option.icon8}
        temp_c={temperatures[7]}
      />
    </div>
  );
}

export default miniCards;
