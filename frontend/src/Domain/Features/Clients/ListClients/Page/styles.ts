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

export const ContainerRoutes = styled.div``;

export const CardClient = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${(props) => props.theme.Ice500};
  border: 1px solid ${(props) => props.theme.Ice700};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  #position {
    margin-right: 1rem;

    h5 {
    }
  }

  #wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    #row-route {
      display: flex;
      align-items: center;

      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: .5rem;
      }
    }
  }

  #section {
    display: flex;
    flex: 1;
    flex-direction: column;

    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme.Background700};
    }

    h6 {
      font-size: 1rem;
      color: ${(props) => props.theme.Dark500};
    }
  }
`;

export const TextTotalDistance = styled(Typography.H4)``;
