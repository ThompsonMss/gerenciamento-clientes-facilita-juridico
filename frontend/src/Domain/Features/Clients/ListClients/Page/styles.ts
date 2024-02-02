import { Typography } from "@Shared/Components/Typography";
import styled from "styled-components";

export const ContainerLoad = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TextLoad = styled(Typography.BodyLarge)``;

export const TextEmpty = styled(Typography.BodyLarge)`
  text-align: center;
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ContainerPaginate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;