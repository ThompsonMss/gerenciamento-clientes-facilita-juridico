import styled from "styled-components";
import { Typography } from "../Typography";

export const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  #actions {

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      justify-content: center;
      width: 100%;
    }
  }
`;

export const Title = styled(Typography.H3)`

  text-align: left;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

`;