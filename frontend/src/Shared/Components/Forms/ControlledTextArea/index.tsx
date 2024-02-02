import { TextArea } from "@Shared/Components/Forms/TextArea";
import { InterfaceControlledInputDefault } from "./interfaces";

import { Controller, ValidationRule } from "react-hook-form";

export function ControlledTextArea({
    name,
    control,
    rules = {},
    errors = {},
    ...rest }: InterfaceControlledInputDefault) {

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <TextArea
                    temErro={!!errors[name]?.message}
                    descErro={errors[name]?.message as any ?? ''}
                    focusErro
                    {...rest}
                    {...field}
                />
            )}
        />
    );

}