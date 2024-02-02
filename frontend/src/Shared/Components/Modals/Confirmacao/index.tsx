import React from "react";
import { Backdrop, Container, Modal, TextDesc } from "./styles";
import { Modals } from "..";

interface DefaultProps {
    show: boolean;
    onHide: (...args: any) => any;
    desabilitarClickBackdrop?: boolean;
    title: string;
    desc: string;
    actions: {
        buttonOk: {
            label: string;
            onClick?: (...args: any) => any
            notNegative?: boolean
        };
        buttonCancelar: {
            label: string;
            onClick?: (...args: any) => any;
        },
    }
}

export function Confirmacao({
    show,
    onHide,
    desabilitarClickBackdrop = true,
    title,
    desc,
    actions
}: DefaultProps) {

    const [controlShow, setControlShow] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        if (show) {
            setControlShow(true)
            setShowModal(true);
        } else {
            setShowModal(false);
            setTimeout(() => setControlShow(false), 1000)
        }
    }, [show]);

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
                temDoisBotoesNaAction={true}
                full={false}
                show={showModal}
            >

                <Modals.Title
                    title={title}
                    onHide={onHide}
                />

                <Modals.Content full={false} temDoisBotoes={true}>
                    <TextDesc>{desc}</TextDesc>
                </Modals.Content>

                <Modals.Action
                    buttonOk={actions.buttonOk}
                    buttonCancelar={{
                        ...actions.buttonCancelar,
                        notNegative: true
                    }}
                />

            </Modal>
        </Container>
    )
}