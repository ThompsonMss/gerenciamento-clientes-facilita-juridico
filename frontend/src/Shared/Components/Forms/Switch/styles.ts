import { Typography } from "@Shared/Components/Typography";
import styled, { css } from "styled-components";

interface ComumProps {
    disabled: boolean;
}

export const Container = styled.div<ComumProps>`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    gap: .5rem;

    input {
        
        width: 4rem;
        height: 2rem;
        min-width: 4rem;
        min-height: 2rem;
        appearance: none;
        background-color: ${props => props.theme.Ice700};

        border-radius: 8px;
        box-shadow: inset 0px 0px 8px 1px rgba(0,0,0,0.10);

        cursor: pointer;

        transition: .4s;

        position: relative;

        ${props => {
        if (props.disabled) {
            return css`
                        cursor: not-allowed;
                        background-color: ${props => props.theme.Ice500};
                    `;
        }
    }}
        

        &:checked {
            background-color: ${props => props.theme.Primary600};

            ${props => {
        if (props.disabled) {
            return css`
                            cursor: not-allowed;
                            background-color: ${props => props.theme.Ice500};
                        `;
        }
    }}
        }

        &::before {
            content: 'Não';

            color: ${props => props.theme.Dark500};
            font-family: 'Roboto', sans-serif;
            font-size: 0.625rem;
            font-weight: 400;
            line-height: 0.875rem;

            padding-left: 0.1875rem;
            padding-top: 0.3125rem;

            width: 1.5rem;
            height: 1.5rem;
            background-color: ${props => props.theme.Ice100};
            border-radius: 4px;

            position: absolute;
            top: 0.25rem;
            left: 0.25rem;

            box-shadow: 0px 4px 8px 1px rgba(0,0,0,0.10);

            transition: .4s;

            ${props => {
        if (props.disabled) {
            return css`
                            cursor: not-allowed;
                            background-color: ${props => props.theme.Ice100};
                            color: ${props => props.theme.Background300};
                    `;
        }
    }}
        }

        &:checked::before {
            content: 'Sim';
            left: 2.25rem;
            transition: .4s;

            ${props => {
        if (props.disabled) {
            return css`
                            cursor: not-allowed;
                            background-color: ${props => props.theme.Ice100};
                            color: ${props => props.theme.Background300};
                    `;
        }
    }}
        }
    }

`;

export const Label = styled(Typography.BodyLarge) <ComumProps>``