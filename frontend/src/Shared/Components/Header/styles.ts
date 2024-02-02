import styled from "styled-components";
import { Typography } from "../Typography";

export const Container = styled.div`
  width: 100%;
  height: 4.375rem;
  background-color: ${(props) => props.theme.Ice100};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  -webkit-box-shadow: 2px 2px 2px 1px rgba(221,221,221,1);
  -moz-box-shadow: 2px 2px 2px 1px rgba(221,221,221,1);
  box-shadow: 2px 2px 2px 1px rgba(221,221,221,1);

  padding: 0 2rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  #content-header {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;

    padding: 0 1rem;

    @media screen and (max-width: 768px) {
     padding: 0 0rem;
    }

    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 4.375rem;
  }
`;

export const Title = styled(Typography.H2)`

  span {
    font-weight: normal;
    font-size: .75rem;
  }

`;
