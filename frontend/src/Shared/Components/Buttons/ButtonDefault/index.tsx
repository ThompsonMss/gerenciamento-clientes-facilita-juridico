import React from 'react';
import * as Style from './styles'
import { InterfaceButtonDefault } from "./interfaces";

import { getVariant } from './getVariant';
import { Modals } from '@Shared/Components/Modals';
import { Typography } from '@Shared/Components/Typography';

export function ButtonDefault({
    variant = "primary",
    label,
    size = "large",
    disabled,
    iconLeft,
    iconRight,
    negativeAction,
    loading,
    onClick = () => null,
    isMobile = false,
    confirmAction = false,
    descConfirmAction = '',
    ...rest
}: InterfaceButtonDefault) {

    const [showConfirm, setShowConfirm] = React.useState(false);
    const [callbackConfirm, setCallbackConfirm] = React.useState<(...args: any) => any>(() => null);

    const styleVariant = getVariant({
        variant,
        disabled,
        negativeAction
    });

    const Loading = () => (
        <Style.Load size={size} childrenColor={styleVariant.childrenColor}>
            <div></div><div></div><div></div><div></div>
        </Style.Load>
    );

    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        if (!!confirmAction) {

            setCallbackConfirm(() => {
                return () => onClick(event);
            });

            setShowConfirm(true);
        } else {
            onClick(event);
        }
    }

    return (
        <>
            <Style.Button
                size={size}
                disabled={!!disabled}
                backgroundColor={styleVariant.backgroundColor}
                borderColor={styleVariant.borderColor}
                backgroundColorHover={styleVariant.backgroundColorHover}
                borderColorHover={styleVariant.borderColorHover}
                backgroundColorPressed={styleVariant.backgroundColorPressed}
                borderColorPressed={styleVariant.borderColorPressed}
                childrenColor={styleVariant.childrenColor}
                childrenColorHover={styleVariant.childrenColorHover}
                $loading={!!loading}
                isMobile={isMobile}
                isLink={variant === 'link'}
                {...rest}
                onClick={!!loading ? () => null : handleClick}
            >

                {!!loading ? (
                    <Loading />
                ) : (
                    <>
                        {iconLeft && <Style.Icon icon={iconLeft} />}

                        {label}

                        {iconRight && <Style.Icon icon={iconRight} />}
                    </>
                )}

            </Style.Button>

            <Modals.Default
                show={showConfirm}
                onHide={() => {
                    setShowConfirm(false);
                    setCallbackConfirm(() => null);
                }}
                title='Atenção'
                children={
                    <>
                        <Typography.BodyLarge>{!!descConfirmAction ? descConfirmAction : 'Deseja realizar essa operação?'}</Typography.BodyLarge>
                    </>
                }
                full={false}
                actions={{
                    buttonCancelar: {
                        label: 'Cancelar', onClick: () => {
                            setShowConfirm(false);
                            setCallbackConfirm(() => {
                                return () => null;
                            });
                        }
                    },
                    buttonOk: {
                        label: 'Confirmar',
                        onClick: () => {
                            setShowConfirm(false);
                            callbackConfirm();
                            setCallbackConfirm(() => {
                                return () => null;
                            });
                        }
                    }
                }}
            />

        </>
    )
}