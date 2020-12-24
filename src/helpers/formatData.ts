/* eslint-disable no-restricted-properties */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const shortenLargeNumber = (
  value: number | string,
  digits?: number | undefined | null,
) => {
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
};

const addNumberSeparator = (
  value: string | number,
  separator?: string | null,
): string => {
  if (typeof value === 'number') value = String(value);
  if (!separator) separator = '.';

  return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${separator}`);
};

const getTimeFromNow = (
  value: string | number,
  option?: boolean | null | undefined,
) => {
  if (!option) option = false;
  return dayjs.unix(Number(value)).fromNow(option);
};

const getCreatedTime = (value: number, options: string = 'MMMM D, YYYY') => {
  return dayjs.unix(value).format(options);
};

export default {
  shortenLargeNumber,
  getTimeFromNow,
  getCreatedTime,
  addNumberSeparator,
};
