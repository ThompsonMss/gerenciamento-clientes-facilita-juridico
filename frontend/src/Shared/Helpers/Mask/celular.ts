import { maxValue } from "./maxValue";

function setMask(value: string) {
    /* 978788585 => 9 7878-8585 */

    if (value) {

        value = value.replace(/\D/gi, "");

        value = value.replace(
            /(\d{2})(\d{1})(\d{4})(\d{4})/g,
            "($1) $2 $3-$4"
        );
    }

    value = maxValue(value, 16);
    return value;
}

function setMaskRunTime(value = "", event: any = undefined, onChange: any = undefined) {
    /* 978788585 => 9 7878-8585 */

    value = value.replace(/\D/gi, "");

    let newValue = "";

    for (let i = 1; i <= value.length; i++) {
        const letra = value.charAt(i - 1);
        newValue += letra;

        if (i == 1) {
            newValue += " ";
        }

        if (i == 5) {
            newValue += "-";
        }
    }

    value = maxValue(newValue, 11);

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
    /* 9 7878-8585 => 978788585 */

    if (value) {
        value = value.replace(/\D/gi, "");
    }

    return value;
}

export const celular = { setMask, setMaskRunTime, removeMask };