import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import React from "react";

export interface InterfaceInputSelect {
    temErro?: boolean
    disabled?: boolean;
    disabledButtonIcon?: boolean;
    autoFocus?: boolean;
    stylesContainer?: React.CSSProperties;

    desc?: string;
    descErro?: string;

    focusErro?: boolean

    label?: string;
    inputOpcional?: boolean;

    iconLeft?: IconDefinition;

    value?: string
    onChangeValue?: (value: string | number) => any;
    onChange?: (event: any) => any;
    placeholder?: string;

    dataList: ItemList[];
    isMulti?: boolean;
    valueMulti?: ItemList[];
    onChangeValueMulti?: (values: { label: string; value: string }[]) => any;
    titleModal?: string;
}

export interface ItemList {
    label: string | number;
    value: string | number;
}