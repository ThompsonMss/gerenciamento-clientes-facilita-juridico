import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import React from "react";

export interface InterfaceTextArea extends React.HTMLAttributes<HTMLTextAreaElement> {
    temErro?: boolean
    disabled?: boolean;
    disabledButtonIcon?: boolean;
    autoFocus?: boolean;
    stylesContainer?: React.CSSProperties;
    stylesInput?: React.CSSProperties;

    desc?: string;
    descErro?: string;

    focusErro?: boolean

    label?: string;
    inputOpcional?: boolean;

    rows?: number;
    cols?: number;

}