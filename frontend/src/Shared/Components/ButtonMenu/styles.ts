import styled, { css, keyframes } from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TypeBaseTheme } from "@Shared/Styles/Themes/interfaces";

interface ContainerBaseProps {

}

const ContainerBase = styled.button<ContainerBaseProps>`

    border: none;
    outline: none;
    appearance: none;
    background: ${props => props.theme.Primary600};

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 2rem;
    width: 2rem;

    border: 1px solid ${props => props.theme.Ice700};

    background-color: transparent;

    &:hover {
      background-color: ${props => props.theme.Ice700};
    }

    svg {
        color: ${props => props.theme.Background400};
        font-size: 0.875rem;
    }

    transition: all .2s ease-in;
`;

export const Button = styled(ContainerBase)``;

export const Icon = styled(FontAwesomeIcon)``;

// Loading
const ldsRing = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

interface LoadProps {}

export const Load = styled.div<LoadProps>`

    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: .25rem;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 14px;
        height: 14px;
        margin: 2px;
        border-width: 2px;
        border-style: solid;

        border-radius: 50%;
        animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme.Background400} transparent transparent transparent;

        &:nth-child(1){
            animation-delay: -0.45s;
        }

        &:nth-child(2){
            animation-delay: -0.3s;
        }

        &:nth-child(3){
            animation-delay: -0.15s;
        }

    }
`;

export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:active {
        color: ${props => props.theme.Ice100};
    }
`;