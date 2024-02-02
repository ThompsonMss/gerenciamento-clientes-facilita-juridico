import styled, { css, keyframes } from "styled-components";
import { TypeSizeButtonDefault, TypeVariantButtonDefault } from "./interfaces";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TypeBaseTheme } from "@Shared/Styles/Themes/interfaces";

interface ContainerBaseProps {
    size: TypeSizeButtonDefault,
    borderColor: null | TypeBaseTheme,
    backgroundColor: null | TypeBaseTheme,
    borderColorHover: null | TypeBaseTheme,
    backgroundColorHover: null | TypeBaseTheme,
    borderColorPressed: null | TypeBaseTheme,
    backgroundColorPressed: null | TypeBaseTheme,
    childrenColor: TypeBaseTheme,
    childrenColorHover: TypeBaseTheme,
    isMobile?: boolean;
    isLink?: boolean;
    $loading: boolean;
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
    gap: 0.5rem;

    ${props => {
        if(!!props?.isLink === false){
            return css`
                min-width: 8.12rem;
            `;
        }
    }}

    border-radius: 48px;

    ${props => {

        if(!!props?.isLink === true){
            return css`
                height: 3rem;

                border-width: 0.0625rem;
                border-style: solid;

                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 700;
                line-height: 1.375rem;
            `;
        }

        if (props.size === 'large') {
            return css`
                height: 3rem;
                padding: 0px 1rem;

                border-width: 0.0625rem;
                border-style: solid;

                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 700;
                line-height: 1.375rem;
            `;
        }

        if (props.size === 'small') {
            return css`
                height: 2rem;
                padding: 0px 0.75rem;

                border-width: 0.0625rem;
                border-style: solid;

                min-width: 6.25rem;

                font-family: 'Roboto', sans-serif;
                font-size: 0.875rem;
                font-weight: 700;
                line-height: 1.1875rem;
            `;
        }

    }}

    border-color: ${props => props.borderColor ? props.theme[props.borderColor] : 'transparent'};
    background-color: ${props => props.backgroundColor ? props.theme[props.backgroundColor] : 'transparent'};
    color: ${props => props.theme[props.childrenColor]};

    ${props => {
        if (!props.$loading) {
            return css`
                &:hover {
                    border-color: ${(props: any) => props.borderColorHover ? props.theme[props.borderColorHover] : 'transparent'};
                    background-color: ${(props: any) => props.backgroundColorHover ? props.theme[props.backgroundColorHover] : 'transparent'};
                    color: ${(props: any) => props.theme[props.childrenColorHover]};

                    svg {
                        color: ${(props: any) => props.theme[props.childrenColorHover]};
                    }
                };

                &:disabled {
                    cursor: not-allowed;
                    border-color: ${(props: any) => props.borderColor ? props.theme[props.borderColor] : 'transparent'};
                    background-color: ${(props: any) => props.backgroundColor ? props.theme[props.backgroundColor] : 'transparent'};
                    color: ${(props: any) => props.theme[props.childrenColor]};

                    svg {
                        color: ${(props: any) => props.theme[props.childrenColor]};
                    }
                };

                &:active {

                    border-color: ${(props: any) => props.borderColorPressed ? props.theme[props.borderColorPressed] : 'transparent'};
                    background-color: ${(props: any) => props.backgroundColorPressed ? props.theme[props.backgroundColorPressed] : 'transparent'};
                    color: ${(props: any) => props.theme[props.childrenColorHover]};

                    svg {
                        color: ${(props: any) => props.theme[props.childrenColorHover]};
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

    @media screen and (max-width: 768px){
        width: ${props => props.isMobile ? '100%' : 'auto'};
    }
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
