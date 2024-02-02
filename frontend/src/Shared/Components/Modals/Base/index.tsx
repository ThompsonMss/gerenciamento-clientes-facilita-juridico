import React from "react";
import { Backdrop, Container, Modal } from "./styles";

interface DefaultProps {
    full?: boolean;
    show: boolean;
    onHide: (...args: any) => any;
    desabilitarClickBackdrop?: boolean;
    children: React.ReactNode;
}

export function Default({ show, onHide, desabilitarClickBackdrop = false, full = true, children }: DefaultProps) {

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
                full={full}
                show={showModal}
            >
                {children}
            </Modal>
        </Container>
    )
}