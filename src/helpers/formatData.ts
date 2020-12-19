/* eslint-disable no-restricted-properties */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

function shortenLargeNumber(
  value: number | string,
  digits: number | undefined | null,
) {
  if (typeof value === 'string') value = Number(value);
  if (!digits) digits = 1;

  const units = ['k', 'M', 'G', 'T'];
  let decimal;

  for (let i = units.length - 1; i >= 0; i -= 1) {
    decimal = Math.pow(1000, i + 1);

    if (value <= -decimal || value >= decimal) {
      return +(value / decimal).toFixed(digits) + units[i];
    }
  }

  return value;
}

const getTimeFromNow = (value: string | number) => {
  return dayjs.unix(Number(value)).fromNow();
};

export default { shortenLargeNumber, getTimeFromNow };
