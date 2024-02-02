import React from "react";
import { Container } from './styles'

interface ContentProps {
    children: React.ReactNode;
    temDoisBotoes: boolean;
    full: boolean;
}

export function Content({ children, temDoisBotoes, full }: ContentProps) {

    return (
        <Container temDoisBotoes={temDoisBotoes} full={full}>
            {children}
        </Container>
    );

}