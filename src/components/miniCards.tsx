import Forecast from "./forecast";
import { forecastSelectors } from "../store/forecastStore";

function miniCards() {
  const option = forecastSelectors.option();

  return (
    <div className="containerMiniCards">
      <Forecast
        time={option.time1}
        icon={option.icon1}
        temp_c={option.temp_c1}
      />
      <Forecast
        time={option.time2}
        icon={option.icon2}
        temp_c={option.temp_c2}
      />
      <Forecast
        time={option.time3}
        icon={option.icon3}
        temp_c={option.temp_c3}
      />
      <Forecast
        time={option.time4}
        icon={option.icon4}
        temp_c={option.temp_c4}
      />
      <Forecast
        time={option.time5}
        icon={option.icon5}
        temp_c={option.temp_c5}
      />
      <Forecast
        time={option.time6}
        icon={option.icon6}
        temp_c={option.temp_c6}
      />
      <Forecast
        time={option.time7}
        icon={option.icon7}
        temp_c={option.temp_c7}
      />
      <Forecast
        time={option.time8}
        icon={option.icon8}
        temp_c={option.temp_c8}
      />
    </div>
  );
}

export default miniCards;
