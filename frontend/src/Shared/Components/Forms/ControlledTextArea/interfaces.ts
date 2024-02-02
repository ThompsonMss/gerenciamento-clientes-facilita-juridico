import { InterfaceTextArea } from '@Shared/Components/Forms/TextArea/interfaces'

import { Control, FieldErrors, RegisterOptions } from "react-hook-form";

export interface InterfaceControlledInputDefault extends InterfaceTextArea {
    name: string;
    control: Control<any>,
    rules?: Omit<RegisterOptions<any, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    errors?: FieldErrors<any>
}