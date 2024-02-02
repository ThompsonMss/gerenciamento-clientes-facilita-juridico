import { maxValue } from "./maxValue";

function setMask(value: string) {
  /* 61 => (61) */

  if (value) {
    value = value.replace(
      /(\d{2})/g,
      "($1)"
    );
  }

  return value;
}

function setMaskRunTime(value = "", event: any = undefined, onChange: any = undefined) {
  /* 61 => (61) */

  value = value.replace(/\D/gi, "");  
  let newValue = "";

  for (let i = 1; i <= value.length; i++) {
    const letra = value.charAt(i - 1);

    if (i == 1) {
      newValue = "(" + letra;
    }

    if (i == 2) {
      newValue +=  letra + ")";
    }
  }

  value = maxValue(newValue, 4);

  //----------------------

  if (event != undefined) {
    event.target.value = value;
  }

  if (onChange != undefined) {
    onChange(value);
  }

  return value;

}

function removeMask(value: string) {
  /* (61) => 61 */

  if (value) {
    value = value.replace(/\D/gi, "");
  }

  return value;
}

export const ddd = { setMask, setMaskRunTime, removeMask };