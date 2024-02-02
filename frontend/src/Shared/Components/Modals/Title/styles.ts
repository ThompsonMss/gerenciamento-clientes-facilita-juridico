import { Typography } from "@Shared/Components/Typography";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.5rem;

    border-bottom: 1px solid ${props => props.theme.Ice500};
    padding-left: 2rem;
    padding-right: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    svg {
        width: 1.5rem;
        height: 1.5rem;

        color: ${props => props.theme.Background400};
        cursor: pointer;

        margin-left: .5rem;

        &:hover {
            color: ${props => props.theme.Background500};
        }
    }

    @media screen and (max-width: 756px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export const TitleHeader = styled(Typography.H3)`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;    
`;