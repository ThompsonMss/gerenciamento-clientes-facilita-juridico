import React from "react";
import { Backdrop, Container, Modal } from "./styles";
import { Modals } from "..";

interface DefaultProps {
    full?: boolean;
    show: boolean;
    onHide: (...args: any) => any;
    desabilitarClickBackdrop?: boolean;
    children: React.ReactNode;
    title: string;
    actions: {
        buttonOk: {
            label: string;
            disabled?: boolean;
            loading?: boolean;
            onClick?: (...args: any) => any
            notNegative?: boolean;
            confirmAction?: boolean;
            descConfirmAction?: string;
        };
        buttonCancelar?: {
            label?: string;
            disabled?: boolean;
            loading?: boolean;
            onClick?: (...args: any) => any;
            notNegative?: boolean;
            confirmAction?: boolean;
            descConfirmAction?: string;
        },
    }
}

export function Default({
    show,
    onHide,
    desabilitarClickBackdrop = false,
    full = true,
    children,
    title,
    actions
}: DefaultProps) {

    const [controlShow, setControlShow] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const temDoisBotoes = actions?.buttonCancelar !== undefined && actions?.buttonOk !== undefined;

    React.useEffect(() => {
        if (show) {
            setControlShow(true)
            setShowModal(true);
        } else {
            setShowModal(false);
            setTimeout(() => setControlShow(false), 1000)
        }
    }, [show]);

    React.useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);

    if (controlShow === false) return null;

    return (
        <Container>
            <Backdrop
                onClick={() => {
                    if (desabilitarClickBackdrop === false) {
                        onHide();
                    }
                }}
                show={showModal}
            />

            <Modal
                temDoisBotoesNaAction={temDoisBotoes}
                full={full}
                show={showModal}
            >

                <Modals.Title
                    title={title}
                    onHide={onHide}
                />

                <Modals.Content full={full} temDoisBotoes={temDoisBotoes}>
                    {children}
                </Modals.Content>

                <Modals.Action
                    {...actions}
                />

            </Modal>
        </Container>
    )
}