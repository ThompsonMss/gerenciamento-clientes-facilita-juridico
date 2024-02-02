import styled, { css, keyframes } from "styled-components";
import { TypeFormatButtonDefault, TypeSizeButtonDefault, TypeVariantButtonDefault } from "./interfaces";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TypeBaseTheme } from "@Shared/Styles/Themes/interfaces";

interface ContainerBaseProps {
    size: TypeSizeButtonDefault,
    backgroundColor: null | TypeBaseTheme,
    backgroundColorHover: null | TypeBaseTheme,
    backgroundColorPressed: null | TypeBaseTheme,
    childrenColor: TypeBaseTheme;

    format: TypeFormatButtonDefault;
    $loading: boolean;

    mostrarSombra: boolean;
}

const ContainerBase = styled.button<ContainerBaseProps>`

    ${props => {
        if (props.mostrarSombra) {
            return css`
                box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;      
            `;
        }
    }}

    border: none;
    outline: none;
    appearance: none;
    background: ${props => props.theme.Primary600};

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${props => {
        if (props.format === 'round') {
            return css`border-radius: 48px;`;
        }

        if (props.format === 'square') {

            if (props.size === 'small') {
                return css`border-radius: 4px;`;
            }

            return css`border-radius: 8px;`;
        }
    }}

    ${props => {

        if (props.size === 'large') {
            return css`
                height: 3rem;
                width: 3rem;
            `;
        }

        if (props.size === 'small') {
            return css`
                height: 2rem;
                width: 2rem;
            `;
        }

    }}

    background-color: ${props => props.backgroundColor ? props.theme[props.backgroundColor] : 'transparent'};
    color: ${props => props.theme[props.childrenColor]};

    ${props => {
        if (!props.$loading) {
            return css`
                &:hover {
                    background-color: ${(props: any) => props.backgroundColorHover ? props.theme[props.backgroundColorHover] : 'transparent'};
                };

                &:disabled {
                    cursor: not-allowed;
                    background-color: ${(props:any) => props.backgroundColor ? props.theme[props.backgroundColor] : 'transparent'};
                    color: ${(props:any) => props.theme[props.childrenColor]};

                    svg {
                        color: ${(props:any) => props.theme[props.childrenColor]};
                    }
                };

                &:active {

                    background-color: ${(props:any) => props.backgroundColorPressed ? props.theme[props.backgroundColorPressed] : 'transparent'};
                    color: ${(props:any) => props.theme[props.childrenColor]};

                    svg {
                        color: ${(props:any) => props.theme[props.childrenColor]};
                    }
                }
            `;
        }
    }}

    ${props => {
        if (props.$loading) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}

    svg {
        color: ${props => props.theme[props.childrenColor]};

        ${props => {
        if (props.size === "large") {
            return css`
                font-size: 1rem;
            `;
        }

        if (props.size === "small") {
            return css`
                font-size: 0.875rem;
            `;
        }
    }}
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

interface LoadProps {
    childrenColor: TypeBaseTheme;
    size: TypeSizeButtonDefault;
}

export const Load = styled.div<LoadProps>`

    display: inline-block;
    position: relative;

    ${props => {
        if (props.size === "large") {
            return css`
                width: 20px;
                height: 20px;
            `;
        }

        if (props.size === "small") {
            return css`
                width: 16px;
                height: 16px;
            `;
        }
    }}

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;

        ${props => {
        if (props.size === "large") {
            return css`
                    width: 16px;
                    height: 16px;
                    margin: 2px;
                    border-width: 2px;
                    border-style: solid;
                `;
        }

        if (props.size === "small") {
            return css`
                    width: 14px;
                    height: 14px;
                    margin: 2px;
                    border-width: 2px;
                    border-style: solid;
                `;
        }
    }}

        border-radius: 50%;
        animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme[props.childrenColor]} transparent transparent transparent;

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
