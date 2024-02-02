import { InterfaceButtonDefault } from "@Shared/Components/Buttons/ButtonDefault/interfaces";
import { Container } from "./styles";

import { Buttons } from '@Shared/Components/Buttons'
import React from "react";

interface ActionProps {
    buttonOk?: {
        label: string;
        disabled?: boolean;
        loading?: boolean;
        onClick?: (...args: any) => any
        notNegative?: boolean
    };
    buttonCancelar?: {
        label?: string;
        disabled?: boolean;
        loading?: boolean;
        onClick?: (...args: any) => any;
        notNegative?: boolean
    },
    custom?: React.ReactNode;
}

export function Action({ buttonOk = undefined, buttonCancelar = undefined, custom = null }: ActionProps) {

    const temDoisBotoes = buttonCancelar !== undefined && buttonOk !== undefined;

    return (
        <Container temDoisBotoes={temDoisBotoes} id="containerActionModal">

            {custom}

            {buttonCancelar !== undefined && (
                <Buttons.ButtonDefault {...buttonCancelar}
                    label={!!buttonCancelar.label ? buttonCancelar.label : 'Cancelar'}
                    negativeAction={!!buttonCancelar.notNegative ? false : true}
                    variant={!!buttonCancelar.notNegative ? "tertiary" : "secondary"}
                    className="btnModalActionFull"
                />
            )}

            {buttonOk !== undefined && (
                <Buttons.ButtonDefault
                    {...buttonOk}
                    negativeAction={!!buttonOk.notNegative ? true : false}
                    className="btnModalActionFull" />
            )}

        </Container>
    );
}