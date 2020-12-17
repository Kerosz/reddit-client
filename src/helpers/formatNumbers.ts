/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-properties */

const formatNumbers = (
  value: number | string,
  digits: number | undefined | null,
): string => {
  if (typeof value === 'string') value = Number(value);
  if (!digits) digits = 1;

  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  const floor = Math.floor(Math.abs(value).toString().length / 3);
  const newValue = +(value / Math.pow(1000, floor));

  return newValue.toFixed(newValue > 1 ? digits : 2) + units[floor - 1];
};

export default formatNumbers;
