const getSrcFromStr = (value: string): string => {
  const regex = /src\s*=\s*"([^"]+)"/i;
  const match = value.match(regex) || [];

  return match[1];
};

export default getSrcFromStr;
