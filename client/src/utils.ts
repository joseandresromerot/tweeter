export const roundValue = (value: number): string => {
  if (value > 999) {
    return `${(value/1000).toFixed(1)}k`;
  }
  return value.toString();
};