import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import React from "react";

export interface InterfaceInputDefault extends React.HTMLAttributes<HTMLInputElement> {
    temErro?: boolean
    disabled?: boolean;
    disabledButtonIcon?: boolean;
    autoFocus?: boolean;
    stylesContainer?: React.CSSProperties;
    stylesInput?: React.CSSProperties;

    desc?: string;
    descErro?: string;

    contadorChar?: number;

    focusErro?: boolean

    label?: string;
    inputOpcional?: boolean;

    iconLeft?: IconDefinition;
    iconRight?: IconDefinition;
    onClickButtonIconRight?: (...args: any) => any;

    textHelp?: string;

    value?: string

    type?: string;

}