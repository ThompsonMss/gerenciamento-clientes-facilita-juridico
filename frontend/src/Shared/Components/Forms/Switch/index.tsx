import { InterfaceSwitchProps } from "./interfaces";
import { Container, Label } from "./styles";

export function Switch({
    label,
    posLabel: PosLabel,
    direcaoLabel = "right",
    disabled = false,
    stylesContainer = {},
    name,
    checked,
    ...rest
}: InterfaceSwitchProps) {

    return (
        <Container style={stylesContainer} disabled={disabled}>

            {(!!label && direcaoLabel === 'left') && (
                <Label disabled={disabled}>{label}</Label>
            )}

            <input disabled={disabled} type="checkbox" name={name} checked={checked} {...rest} />

            {(!!label && direcaoLabel === 'right') && (
                <>
                    {!!PosLabel && (
                        <>
                            {PosLabel}
                        </>
                    )}
                    <Label disabled={disabled}>{label}</Label>
                </>
            )}
        </Container>
    );

}