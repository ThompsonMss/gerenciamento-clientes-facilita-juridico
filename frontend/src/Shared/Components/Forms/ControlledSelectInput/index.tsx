import { InputSelect } from "@Shared/Components/Forms/Select";
import { InterfaceControlledSelectInput } from "./interfaces";

import { Controller, ValidationRule } from "react-hook-form";
import { Mask } from "@Shared/Helpers/Mask";

export function ControlledSelectInput({
    name,
    control,
    rules = {},
    errors = {},
    ...rest }: InterfaceControlledSelectInput) {

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
            (
                <InputSelect
                    temErro={!!errors[name]?.message}
                    descErro={errors[name]?.message as any ?? ''}
                    focusErro
                    {...field}
                    onChange={(e: any) => {

                        const event = {
                            target: { value: e }
                        }

                        field.onChange(event)
                    }}
                    {...rest}
                />
            )
            }
        />
    );

}