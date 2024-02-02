export function maxValue(value: string, max: number) {
  let valueMax = "";

  for (let i = 0; i < max; i++) {
    valueMax += value.charAt(i)
  }

  return valueMax;
}