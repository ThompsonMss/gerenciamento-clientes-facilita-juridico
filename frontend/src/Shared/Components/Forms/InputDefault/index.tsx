import React, { forwardRef } from 'react'
import * as Styles from './styles'

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { InterfaceInputDefault } from './interfaces'
import { useTheme } from 'styled-components'
import { Help } from '@Shared/Components/Help'

function Input({
    temErro = false,
    autoFocus,
    disabled,
    disabledButtonIcon,
    stylesContainer = {},
    stylesInput = {},
    desc,
    descErro,
    label,
    inputOpcional = false,
    iconLeft,
    iconRight,
    focusErro,
    type,
    contadorChar = undefined,
    value = "",
    textHelp = '',
    onClickButtonIconRight = undefined,
    ...rest
}: InterfaceInputDefault, ref?: any) {

    const theme = useTheme()

    const idInput = React.useMemo(() => {
        return Math.random() * 99999999 + new Date().getTime() + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }, []);

    function requestInput() {
        document.getElementById(idInput)?.focus();
    }

    function onClickIconButton(event: React.MouseEvent<HTMLDivElement>) {
        event.stopPropagation();

        if (!!disabledButtonIcon) return
        if (onClickButtonIconRight === undefined) return;

        onClickButtonIconRight();
    }

    React.useEffect(() => {
        if (!!focusErro && temErro) {
            requestInput();
        }
    }, [temErro])

    return (
        <Styles.Container style={stylesContainer} onClick={requestInput}>
            {!!label && (
                <div style={{ marginBottom: '0.25rem', display: 'flex', alignItems: 'center' }}>
                    <Styles.Label>{label}:{!!inputOpcional ? <Styles.TextpOpcional> (opcional)</Styles.TextpOpcional> : ''}</Styles.Label>

                    {!!textHelp && (
                        <Help desc={textHelp} placement='auto' style={{marginLeft: '.25rem'}} />
                    )}
                </div>
            )}
            <Styles.InputWrapper disabled={!!disabled} temErro={temErro}>

                {!!iconLeft && (
                    <Styles.Icon icon={iconLeft} />
                )}

                <input ref={ref} type={type} style={stylesInput} disabled={!!disabled} autoFocus={!!autoFocus} id={idInput} value={value} {...rest} />

                {temErro && <Styles.Icon style={{ color: theme.Negative500 }} icon={faCircleExclamation} />}

                {(!!iconRight && onClickButtonIconRight !== undefined) && (
                    <Styles.ButtonIcon disabledButtonIcon={!!disabledButtonIcon} onClick={onClickIconButton}>
                        <Styles.IconRight icon={iconRight} />
                    </Styles.ButtonIcon>
                )}

            </Styles.InputWrapper>

            <Styles.ContainerDesc>
                {(!!descErro && temErro) ? (
                    <Styles.Desc temErro={temErro}>{descErro}</Styles.Desc>
                ) : (
                    <>
                        {!!desc && (
                            <Styles.Desc temErro={false}>{desc}</Styles.Desc>
                        )}

                        {!!contadorChar && (
                            <Styles.ContadorCharText>{value.length}/{contadorChar}</Styles.ContadorCharText>
                        )}
                    </>
                )}
            </Styles.ContainerDesc>

        </Styles.Container>
    )
}

export const InputDefault = forwardRef(Input);