import { IconDefinition } from '@fortawesome/free-regular-svg-icons'

export interface InterfaceButtonDefault extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: TypeVariantButtonDefault;
    icon: IconDefinition;
    disabled?: boolean;
    size?: TypeSizeButtonDefault;
    loading?: boolean;
    format?: TypeFormatButtonDefault

    mostrarSombra?: boolean
    negativeAction?: boolean;

    confirmAction?: boolean;
    descConfirmAction?: string;
}

export type TypeVariantButtonDefault = "primary" | "secondary" | "tertiary" | "quaternary" | "link"
export type TypeSizeButtonDefault = "large" | "small"
export type TypeFormatButtonDefault = "square" | "round"