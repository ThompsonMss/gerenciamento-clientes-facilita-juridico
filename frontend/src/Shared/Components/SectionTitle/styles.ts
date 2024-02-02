import styled from "styled-components";
import { Typography } from "../Typography";

export const Container = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  #actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export const Title = styled(Typography.H3)``;