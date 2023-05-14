function time(time: string) {
  const date = new Date(time);
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let amPm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  // adding a leading zero
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const convertedTime = hours + ":" + minutes + "" + amPm;
  return convertedTime;
}

function time2(localtime: string): string {
  const date = new Date(localtime);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    weekday: "short",
  };
  const formatter = new Intl.DateTimeFormat("ru-RU", options);
  return formatter.format(date);
}

function convertMilesToMeters(milesPerHour: number): number {
  const metersPerMile = 1609.34;
  const secondsPerHour = 3600;

  const metersPerSeconds = (milesPerHour * metersPerMile) / secondsPerHour;

  return parseFloat(metersPerSeconds.toFixed());
}

function convertMbToMm(mb: number): number {
  const mmHg = mb * 0.75006375541921;
  return parseFloat(mmHg.toFixed(1));
}

const makeIconUrl = (iconId: string) => `${iconId}`;

export { time2, time, convertMilesToMeters, makeIconUrl, convertMbToMm };
