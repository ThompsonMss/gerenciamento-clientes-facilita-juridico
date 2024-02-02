import React, { forwardRef } from 'react'
import * as Styles from './styles'

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { InterfaceTextArea } from './interfaces'
import { useTheme } from 'styled-components'

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
    focusErro,
    rows = 3,
    cols,
    ...rest
}: InterfaceTextArea, ref?: any) {

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

    React.useEffect(() => {
        if (!!focusErro && temErro) {
            requestInput();
        }
    }, [temErro])

    return (
        <Styles.Container style={stylesContainer} onClick={requestInput}>
            {!!label && (
                <Styles.Label>{label}:{!!inputOpcional ? <Styles.TextpOpcional> (opcional)</Styles.TextpOpcional> : ''}</Styles.Label>
            )}
            <Styles.InputWrapper disabled={!!disabled} temErro={temErro}>
                <textarea ref={ref} style={stylesInput} disabled={!!disabled} autoFocus={!!autoFocus} id={idInput} rows={rows} cols={cols} {...rest} />
            </Styles.InputWrapper>

            {(!!descErro && temErro) ? (
                <Styles.Desc temErro={temErro}>{descErro}</Styles.Desc>
            ) : (
                <>
                    {!!desc && (
                        <Styles.Desc temErro={false}>{desc}</Styles.Desc>
                    )}
                </>
            )}
        </Styles.Container>
    )
}

export const TextArea = forwardRef(Input);