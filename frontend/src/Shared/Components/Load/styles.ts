import { TypeBaseTheme } from "@Shared/Styles/Themes/interfaces";
import styled, { css, keyframes } from "styled-components";
import { InterfaceTamanho } from ".";

interface LoadProps {
    color: TypeBaseTheme;
    size: InterfaceTamanho;
}

const tamanhos = {
    50: [50, 44, 6],
    40: [40, 38, 4],
    30: [30, 26, 2],
    20: [20, 16, 2],
}

// Loading
const ldsRing = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;


export const Load = styled.div<LoadProps>`

    display: inline-block;
    position: relative;

    width: ${props => tamanhos[props.size][0]}px;
    height: ${props => tamanhos[props.size][0]}px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;

        width: ${props => tamanhos[props.size][1]}px;
        height: ${props => tamanhos[props.size][1]}px;
        margin: 2px;
        border-width: ${props => tamanhos[props.size][2]}px;
        border-style: solid;
    

        border-radius: 50%;
        animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme[props.color]} transparent transparent transparent;

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

export const ContainerList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 15rem);
`;