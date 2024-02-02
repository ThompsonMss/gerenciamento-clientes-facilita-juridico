import styled, { css } from "styled-components";

interface ContainerProps {
    temDoisBotoes: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 4.5rem;

    border-top: 1px solid ${props => props.theme.Ice500};
    padding-left: 2rem;
    padding-right: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: .5rem;

    position: absolute;
    bottom: 0;
    left: 0;

    @media screen and (max-width: 756px) {

        flex-direction: column-reverse;
        justify-content: center;

        ${props => {

        if (props.temDoisBotoes) {
            return css`
                    height: 8.75rem;
                    gap: 0.75rem;
                `;
        } else {
            return css`
                    height: 5rem;
                    gap: 0px;
                `;
        }

    }};

        padding-left: 1rem;
        padding-right: 1rem;

        .btnModalActionFull {
            width: 100%;
        }
    }
`;