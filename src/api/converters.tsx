function time(time: string) {
  const [hours, minutes] = time.substring(11,16).split(':');
  let formattedHours = parseInt(hours, 10)
  let suffix = 'am';
  if(formattedHours >= 12) {
    formattedHours -= 12;
    suffix = 'pm'
  }
  if(formattedHours === 0) {
    formattedHours = 12
  }
  
const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes}`
return `${formattedTime} ${suffix}`
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
