import Forecast from "./forecast";
import { forecastSelectors } from "../store/forecastStore";
import { selectors } from "../store/store";

function miniCards() {
  const option = forecastSelectors.option();
  const isCelsius = selectors.isCelsius();
  const isToday = selectors.isToday();

  const temperatures = [];

  for (let i = 1; i <= 8; i++) {
    let checkArray;

    if (isToday) {
      checkArray = isCelsius ? option[`temp_c${i}`] : option[`temp_f${i}`];
    } else {
      checkArray = isCelsius ? option[`temp_cDay2_${i}`] : option[`temp_fDay2_${i}`];
    }

    temperatures.push(checkArray);
  }

  return (
    <div className="containerMiniCards">
      <Forecast
        time={option.time1}
        icon={isToday ? option.icon1 : option.iconDay2_1}
        temp_c={isToday ? temperatures[0] : temperatures[1]}
      />
      <Forecast
        time={option.time2}
        icon={isToday ? option.icon2 : option.iconDay2_2}
        temp_c={temperatures[1]}
      />
      <Forecast
        time={option.time3}
        icon={isToday ? option.icon3 : option.iconDay2_3}
        temp_c={temperatures[2]}
      />
      <Forecast
        time={option.time4}
        icon={isToday ? option.icon4 : option.iconDay2_4}
        temp_c={temperatures[3]}
      />
      <Forecast
        time={option.time5}
        icon={isToday ? option.icon5 : option.iconDay2_5}
        temp_c={temperatures[4]}
      />
      <Forecast
        time={option.time6}
        icon={isToday ? option.icon6 : option.iconDay2_6}
        temp_c={temperatures[5]}
      />
      <Forecast
        time={option.time7}
        icon={isToday ? option.icon7 : option.iconDay2_7}
        temp_c={temperatures[6]}
      />
      <Forecast
        time={option.time8}
        icon={isToday ? option.icon8 : option.iconDay2_8}
        temp_c={temperatures[7]}
      />
    </div>
  );
}

export default miniCards;
