function time(localtime: string) {
  return localtime.substring(11, 16);
}

function time2(vreamya: string): string {
  const date = new Date(vreamya);
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

export { time2, convertMilesToMeters, makeIconUrl, convertMbToMm };
