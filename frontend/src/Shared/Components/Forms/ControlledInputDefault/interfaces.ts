import { InterfaceInputDefault } from '@Shared/Components/Forms/InputDefault/interfaces'
import { IMask } from '@Shared/Helpers/Mask';

import { Control, FieldErrors, RegisterOptions } from "react-hook-form";

export interface InterfaceControlledInputDefault extends InterfaceInputDefault {
    name: string;
    control: Control<any>,
    rules?: Omit<RegisterOptions<any, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    errors?: FieldErrors<any>;
    mask?: IMask
}