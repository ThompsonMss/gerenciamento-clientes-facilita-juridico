import { TypeBaseTheme } from "@Shared/Styles/Themes/interfaces";
import { TypeVariantButtonDefault } from "./interfaces";

interface InterfaceProps {
    variant: TypeVariantButtonDefault;
    disabled?: boolean;
    negativeAction?: boolean;
}

interface InterfaceRetorno {
    borderColor: null | TypeBaseTheme,
    backgroundColor: null | TypeBaseTheme,
    borderColorHover: null | TypeBaseTheme,
    backgroundColorHover: null | TypeBaseTheme,
    borderColorPressed: null | TypeBaseTheme,
    backgroundColorPressed: null | TypeBaseTheme,
    childrenColor: TypeBaseTheme,
    childrenColorHover: TypeBaseTheme,
}

export function getVariant({ disabled, variant, negativeAction }: InterfaceProps): InterfaceRetorno {

    const style: InterfaceRetorno = {
        borderColor: null,
        backgroundColor: null,
        borderColorHover: null,
        backgroundColorHover: null,
        borderColorPressed: null,
        backgroundColorPressed: null,
        childrenColor: 'Ice300',
        childrenColorHover: 'Ice300'
    }

    if (variant === 'primary') {

        style.borderColor = "Primary600"
        style.backgroundColor = "Primary600"
        style.borderColorHover = "Primary700"
        style.backgroundColorHover = "Primary700"
        style.borderColorPressed = "Primary700"
        style.backgroundColorPressed = "Primary700"
        style.childrenColor = "Ice300"
        style.childrenColorHover = "Ice300"

        if (negativeAction) {
            style.borderColor = "Negative400"
            style.backgroundColor = "Negative400"
            style.borderColorHover = "Negative500"
            style.backgroundColorHover = "Negative500"
            style.borderColorPressed = "Negative700"
            style.backgroundColorPressed = "Negative700"
            style.childrenColor = "Ice300"
            style.childrenColorHover = "Ice300"
        }

        if (disabled) {
            style.borderColor = "Ice700"
            style.backgroundColor = "Ice700"
            style.borderColorHover = "Ice700"
            style.backgroundColorHover = "Ice700"
            style.borderColorPressed = "Ice700"
            style.backgroundColorPressed = "Ice700"
            style.childrenColor = "Background300"
            style.childrenColorHover = "Background300"
        }
    }

    if (variant === 'secondary') {

        style.borderColor = "Primary600"
        style.backgroundColor = null
        style.borderColorHover = "Primary600"
        style.backgroundColorHover = "Primary600"
        style.borderColorPressed = "Primary700"
        style.backgroundColorPressed = "Primary700"
        style.childrenColor = "Primary600"
        style.childrenColorHover = "Ice300"

        if (negativeAction) {
            style.borderColor = "Negative400"
            style.backgroundColor = null
            style.borderColorHover = "Negative400"
            style.backgroundColorHover = "Negative400"
            style.borderColorPressed = "Negative500"
            style.backgroundColorPressed = "Negative500"
            style.childrenColor = "Negative400"
            style.childrenColorHover = "Ice300"
        }

        if (disabled) {
            style.borderColor = "Background300"
            style.backgroundColor = null
            style.borderColorHover = "Background300"
            style.backgroundColorHover = null
            style.borderColorPressed = "Background300"
            style.backgroundColorPressed = null
            style.childrenColor = "Background300"
            style.childrenColorHover = "Background300"
        }

    }

    if (variant === 'tertiary') {

        style.borderColor = null
        style.backgroundColor = null
        style.borderColorHover = "Ice500"
        style.backgroundColorHover = "Ice500"
        style.borderColorPressed = "Ice700"
        style.backgroundColorPressed = "Ice700"
        style.childrenColor = "Dark500"
        style.childrenColorHover = "Dark500"

        if (negativeAction) {
            style.borderColor = null
            style.backgroundColor = null
            style.borderColorHover = "Ice500"
            style.backgroundColorHover = "Ice500"
            style.borderColorPressed = "Ice700"
            style.backgroundColorPressed = "Ice700"
            style.childrenColor = "Negative400"
            style.childrenColorHover = "Negative400"
        }

        if (disabled) {
            style.borderColor = null
            style.backgroundColor = null
            style.borderColorHover = null
            style.backgroundColorHover = null
            style.borderColorPressed = null
            style.backgroundColorPressed = null
            style.childrenColor = "Background300"
            style.childrenColorHover = "Background300"
        }

    }

    if (variant === 'quaternary') {

        style.borderColor = "Ice100"
        style.backgroundColor = "Ice100"
        style.borderColorHover = "Ice500"
        style.backgroundColorHover = "Ice500"
        style.borderColorPressed = "Ice700"
        style.backgroundColorPressed = "Ice700"
        style.childrenColor = "Dark500"
        style.childrenColorHover = "Dark500"

        if (negativeAction) {
            style.borderColor = "Negative400"
            style.backgroundColor = "Negative400"
            style.borderColorHover = "Negative500"
            style.backgroundColorHover = "Negative500"
            style.borderColorPressed = "Negative700"
            style.backgroundColorPressed = "Negative700"
            style.childrenColor = "Ice300"
            style.childrenColorHover = "Ice300"
        }

        if (disabled) {
            style.borderColor = "Ice700"
            style.backgroundColor = "Ice700"
            style.borderColorHover = "Ice700"
            style.backgroundColorHover = "Ice700"
            style.borderColorPressed = "Ice700"
            style.backgroundColorPressed = "Ice700"
            style.childrenColor = "Background300"
            style.childrenColorHover = "Background300"
        }
    }

    if (variant === 'link') {

        style.borderColor = null
        style.backgroundColor = null
        style.borderColorHover = null
        style.backgroundColorHover = null
        style.borderColorPressed = null
        style.backgroundColorPressed = null
        style.childrenColor = "Dark500"
        style.childrenColorHover = "Dark500"

        if (negativeAction) {
            style.borderColor = null
            style.backgroundColor = null
            style.borderColorHover = null
            style.backgroundColorHover = null
            style.borderColorPressed = null
            style.backgroundColorPressed = null
            style.childrenColor = "Negative500"
            style.childrenColorHover = "Negative500"
        }

        if (disabled) {
            style.borderColor = null
            style.backgroundColor = null
            style.borderColorHover = null
            style.backgroundColorHover = null
            style.borderColorPressed = null
            style.backgroundColorPressed = null
            style.childrenColor = "Background300"
            style.childrenColorHover = "Background300"
        }
    }

    return style;

}