import { Switch } from "@Shared/Components/Forms/Switch";
import { InterfaceControlledSwitch } from "./interfaces";

import { Controller } from "react-hook-form";
import { Mask } from "@Shared/Helpers/Mask";

export function ControlledSwitch({
    name,
    control,
    rules = {},
    errors = {},
    ...rest }: InterfaceControlledSwitch) {

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) =>
            (
                <Switch
                    {...field}
                    onChange={(e: any) => {
                        field.onChange(e)
                    }}
                    {...rest}
                />
            )
            }
        />
    );

}