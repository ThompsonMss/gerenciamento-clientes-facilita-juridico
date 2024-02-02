import { TypeBaseTheme } from "@Shared/Styles/Themes/interfaces";
import { TypeVariantButtonDefault } from "./interfaces";

interface InterfaceProps {
    variant: TypeVariantButtonDefault;
    disabled?: boolean;
    negativeAction?: boolean;
}

interface InterfaceRetorno {
    backgroundColor: null | TypeBaseTheme,
    backgroundColorHover: null | TypeBaseTheme,
    backgroundColorPressed: null | TypeBaseTheme,
    childrenColor: TypeBaseTheme
}

export function getVariant({ disabled, variant,negativeAction }: InterfaceProps): InterfaceRetorno {

    const style: InterfaceRetorno = {
        backgroundColor: null,
        backgroundColorHover: null,
        backgroundColorPressed: null,
        childrenColor: 'Ice300'
    }

    if (variant === 'primary') {

        style.backgroundColor = "Primary600"
        style.backgroundColorHover = "Primary700"
        style.backgroundColorPressed = "Primary700"
        style.childrenColor = "Ice300"

        if (disabled) {
            style.backgroundColor = "Ice700"
            style.backgroundColorHover = "Ice700"
            style.backgroundColorPressed = "Ice700"
            style.childrenColor = "Background300"
        }

        if (negativeAction) {
            style.backgroundColor = "Negative400"
            style.backgroundColorHover = "Negative500"
            style.backgroundColorPressed = "Negative700"
            style.childrenColor = "Ice300"
        }
    }

    if (variant === 'secondary') {

        style.backgroundColor = "Ice100"
        style.backgroundColorHover = "Ice500"
        style.backgroundColorPressed = "Ice700"
        style.childrenColor = "Dark500"

        if (disabled) {
            style.backgroundColor = "Ice700"
            style.backgroundColorHover = "Ice700"
            style.backgroundColorPressed = "Ice700"
            style.childrenColor = "Background300"
        }

        if (negativeAction) {
            style.backgroundColor = "Negative400"
            style.backgroundColorHover = "Negative500"
            style.backgroundColorPressed = "Negative700"
            style.childrenColor = "Ice300"
        }

    }

    if (variant === 'tertiary') {

        style.backgroundColor = null
        style.backgroundColorHover = "Ice500"
        style.backgroundColorPressed = "Ice700"
        style.childrenColor = "Dark500"

        if (disabled) {
            style.backgroundColor = null
            style.backgroundColorHover = null
            style.backgroundColorPressed = null
            style.childrenColor = "Background300"
        }

        if (negativeAction) {
            style.backgroundColor = "Negative400"
            style.backgroundColorHover = "Negative500"
            style.backgroundColorPressed = "Negative700"
            style.childrenColor = "Ice300"
        }

    }

    if (variant === 'quaternary' || variant === 'link') {

        style.backgroundColor = "Ice100"
        style.backgroundColorHover = "Ice500"
        style.backgroundColorPressed = "Ice700"
        style.childrenColor = "Dark500"

        if (disabled) {
            style.backgroundColor = "Ice700"
            style.backgroundColorHover = "Ice700"
            style.backgroundColorPressed = "Ice700"
            style.childrenColor = "Background300"
        }

        if (negativeAction) {
            style.backgroundColor = "Negative400"
            style.backgroundColorHover = "Negative500"
            style.backgroundColorPressed = "Negative700"
            style.childrenColor = "Ice300"
        }

    }

    return style;

}