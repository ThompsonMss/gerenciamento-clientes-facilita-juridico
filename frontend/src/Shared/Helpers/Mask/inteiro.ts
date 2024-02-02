function setMask(value: any) {
  return value;
}

function setMaskRunTime(
  value = "",
  event: any = undefined,
  onChange: any = undefined
) {
  let newValue: any = value.replace(/\D/g, "");

  newValue = parseFloat(newValue);
  value = newValue;

  //----------------------

  if (event != undefined) {
    event.target.value = value;
  }

  if (onChange != undefined) {
    onChange(value);
  }

  if (value == "NaN") return "";
  if (isNaN(value as any)) return "";

  return value;
}

function removeMask(value: string) {
  /* 1.500.600,00 => 1500600.00 */

  if (value) {
    value = value.replace(/\./gi, "");
    value = value.replace(/\\,/gi, ".");
  }

  return value;
}

export const inteiro = { setMask, setMaskRunTime, removeMask };
