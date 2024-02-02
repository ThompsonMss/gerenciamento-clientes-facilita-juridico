import { CSSProperties } from "styled-components";

export interface InterfaceSwitchProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    posLabel?: any;
    direcaoLabel?: TypeDirecaoLabelSwitch;
    disabled?: boolean;
    stylesContainer?: CSSProperties,
    name?: string;
    checked?: boolean;
}

export type TypeDirecaoLabelSwitch = "left" | "right";