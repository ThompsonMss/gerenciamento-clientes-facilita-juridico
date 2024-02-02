import { Typography } from "@Shared/Components/Typography";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div``;

export const Label = styled(Typography.H4)``;

interface InputWrapperProps {
    temErro: boolean;
    disabled: boolean
}

export const InputWrapper = styled.div<InputWrapperProps>`
    height: 3rem;
    width: 100%;

    border-width: 0.125rem;
    border-style: solid;
    border-color: ${(props) => props.theme.Ice500};

    border-radius: 8px;

    padding: 0px 1rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${(props) => props.theme.Ice100};

    input {
        flex: 1;
        height: 2rem;
        appearance: none;
        border: none;
        outline: none;
        width: 100%;

        color: ${props => props.theme.Dark500};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.375rem;

        &::placeholder {
            color: ${props => props.theme.Background300};
        }
    }

    ${props => {
        if (props.disabled) {
            return css`
                border-color: ${(props) => props.theme.Ice500};
                background-color: ${(props) => props.theme.Ice500};
                cursor: not-allowed;

                input {
                    cursor: not-allowed;
                }
            `;
        } else if (props.temErro) {
            return css`
                    border-color: ${(props) => props.theme.Negative500};
            `;
        } else {
            return css`
                &:focus-within {
                     border-color: ${(props) => props.theme.Primary600};
                }
            `;
        }
    }}

`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 1.25rem;
    color: ${(props) => props.theme.Background700};
`

export const IconRight = styled(Icon)`
    color: ${(props) => props.theme.Primary700};
`

interface ButtonIconProps {
    disabledButtonIcon: boolean;
}

export const ButtonIcon = styled.div<ButtonIconProps>`
    appearance: none;
    outline: none;
    border: none;
    background-color: transparent;

    cursor: pointer;

    ${props => {
        if (props.disabledButtonIcon) {
            return css`
                  cursor: not-allowed;

                  svg {
                    color: ${(props) => props.theme.Background700};
                  }
            `;
        }
    }}
`;

interface DescProps {
    temErro: boolean
}

export const ContainerDesc = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Desc = styled(Typography.BodyMedium) <DescProps>`
    color: ${(props) => props.temErro ? props.theme.Negative500 : props.theme.Background700};
    margin-top: 0.25rem;
`;

export const ContadorCharText = styled(Typography.BodySmall)`
    color: ${(props) => props.theme.Background400};
    margin-top: 0.25rem;
`;

export const TextpOpcional = styled(Typography.BodyMedium)`
    display: inline;
    color: ${(props) => props.theme.Background700};
`;