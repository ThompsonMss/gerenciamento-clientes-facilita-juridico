import { InputDefault } from "@Shared/Components/Forms/InputDefault";
import { InterfaceControlledInputDefault } from "./interfaces";

import { Controller, ValidationRule } from "react-hook-form";
import { Mask } from "@Shared/Helpers/Mask";

export function ControlledInputDefault({
    name,
    control,
    rules = {},
    errors = {},
    mask,
    ...rest }: InterfaceControlledInputDefault) {

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
            (
                <InputDefault
                    temErro={!!errors[name]?.message}
                    descErro={errors[name]?.message as any ?? ''}
                    focusErro
                    {...field}
                    onChange={(e: any) => {
                        if (!!mask) {
                            e.target.value = Mask[mask].setMask(e.target.value)
                        }

                        field.onChange(e)
                    }}
                    {...rest}
                />
            )
            }
        />
    );

}