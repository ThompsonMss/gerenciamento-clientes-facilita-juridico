import styled from "styled-components";

export const GapInput = styled.div`

    display: none;

    @media screen  and (max-width: 768px){

        display: block;

        margin-top: .5rem;
        margin-bottom: .5rem;
        width: 1px;
        height: .5px;
    }
`;

export const GapRowContainer = styled.div`
    margin-top: .5rem;
    margin-bottom: .5rem;
    width: 1px;
    height: .5px;
`;