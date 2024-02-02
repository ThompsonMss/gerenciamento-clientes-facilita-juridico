import styled, { css, keyframes } from "styled-components";
import { transparentize } from 'polished'
import { Typography } from "@Shared/Components/Typography";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    overflow: hidden;

    @media screen and (max-width: 756px) {
        padding: 0rem;
    }
`;

const backdropIn = keyframes`
  0% {
    background-color: transparent;
  }

  100% {
    background-color: ${transparentize(0.4, '#0D0D0D')};
  }
`;

const backdropOut = keyframes`
  0% {
    background-color: ${transparentize(0.4, '#0D0D0D')};
  }

  100% {
    background-color: transparent;
  }
`;

const modalIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const modalOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const modalMobileIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(calc(100vh - 5rem));
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const modalMobileOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(calc(100vh - 5rem));
  }
`;


interface BackdropProps {
    show: boolean;
}

export const Backdrop = styled.div<BackdropProps>`
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    z-index: 1001;

    ${props => {
        if (props.show) {
            return css`
                background-color: ${props => transparentize(0.4, props.theme.Dark700)};
                animation: ${backdropIn} .3s linear normal;
            `;
        } else {
            return css`
                background-color: transparent;
                animation: ${backdropOut} .3s linear normal;  
            `;
        }
    }};
`;

interface InterfaceModal {
    full: boolean
    show: boolean;
    temDoisBotoesNaAction: boolean;
}

export const Modal = styled.div<InterfaceModal>`

    position: relative;

    ${props => {
        if (props.full) return css`height: 100vh;`;
        return css``
    }};
    
    ${props => {
        if (props.temDoisBotoesNaAction) {
            return css`
                padding-bottom: 4.5rem;

                @media screen and (max-width: 756px) {
                    padding-bottom: 8.75rem;
                }
            `
        } else {
            return css`
                padding-bottom: 4.5rem;

                @media screen and (max-width: 756px) {
                    padding-bottom: 5rem;
                }
            `
        }
    }};

    max-height: calc(100vh - 8rem);

    width: 100%;
    max-width: 62.50rem;

    background-color: ${props => props.theme.Ice300};
    border-radius: 16px;

    z-index: 1002;

    ${props => {
        if (props.show) {
            return css`
                opacity: 1;
                animation: ${modalIn} .3s linear normal;
            `;
        } else {
            return css`
               opacity: 0;
                animation: ${modalOut} .3s linear normal;  
            `;
        }
    }};

    @media screen and (max-width: 756px) {
        
        ${props => {
        if (props.full) return css`height: 100vh;`;
        return css``
    }};

        max-height: calc(100vh - 5rem);

        width: 100%;

        background-color: ${props => props.theme.Ice300};
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;

        z-index: 1002;

        position: absolute;
        bottom: 0;
        left: 0;

        ${props => {
        if (props.show) {
            return css`
                    opacity: 1;
                    transform: translateY(0);
                    animation: ${modalMobileIn} .3s linear normal;
                `;
        } else {
            return css`
                    opacity: 0;
                    transform: translateY(calc(100vh - 5rem));
                    animation: ${modalMobileOut} .3s linear normal;  
                `;
        }
    }};
    }
`;

export const TextDesc = styled(Typography.BodyLarge)`
    color: ${props => props.theme.Background700};
`;