import { IconDefinition } from '@fortawesome/free-regular-svg-icons'

export interface InterfaceButtonDefault extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: TypeVariantButtonDefault;
    iconLeft?: IconDefinition;
    iconRight?: IconDefinition;
    disabled?: boolean;
    label: string;
    size?: TypeSizeButtonDefault;
    loading?: boolean;
    negativeAction?: boolean;
    isMobile?: boolean;
    confirmAction?: boolean;
    descConfirmAction?: string;
}

export type TypeVariantButtonDefault = "primary" | "secondary" | "tertiary" | "quaternary" | "link"
export type TypeSizeButtonDefault = "large" | "small"