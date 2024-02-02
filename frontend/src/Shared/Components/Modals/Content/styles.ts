import styled, { css } from "styled-components";

interface ContainerProps {
    temDoisBotoes: boolean;
    full: boolean
}

export const Container = styled.div<ContainerProps>`

    ${props => {
        if (props.full) {
            return css`height: 100vh;`;
        }

        return css``;
    }};

    margin-top: .5rem;
    margin-bottom: .5rem;

    padding: .5rem 2rem;

    max-height: calc(100vh - 18rem);

    overflow-y: auto;

    @media screen and (max-width: 756px) {
        padding: .5rem 1rem;

        ${props => {
        if (props.temDoisBotoes) {

            if (props.full) {
                return css`
                    max-height: calc(100vh - 19.25rem);
                `;
            }

            return css`
                max-height: calc(100vh - 22.25rem);
            `;
        } else {

            if (props.full) {
                return css`
                    max-height: calc(100vh - 15.5rem);
                `;
            }

            return css`
                max-height: calc(100vh - 18.5rem);
            `;
        }
    }};
    }
`;