import { InterfaceInputSelect } from '@Shared/Components/Forms/Select/interfaces'
import { IMask } from '@Shared/Helpers/Mask';

import { Control, FieldErrors, RegisterOptions } from "react-hook-form";

export interface InterfaceControlledSelectInput extends InterfaceInputSelect {
    name: string;
    control: Control<any>,
    rules?: Omit<RegisterOptions<any, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    errors?: FieldErrors<any>;
}