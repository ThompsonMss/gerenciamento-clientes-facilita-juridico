import { InterfaceSwitchProps } from '@Shared/Components/Forms/Switch/interfaces'
import { IMask } from '@Shared/Helpers/Mask';

import { Control, FieldErrors, RegisterOptions } from "react-hook-form";

export interface InterfaceControlledSwitch extends InterfaceSwitchProps {
    name: string;
    control: Control<any>,
    rules?: Omit<RegisterOptions<any, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    errors?: FieldErrors<any>;
}