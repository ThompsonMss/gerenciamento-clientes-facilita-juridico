import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 5.375rem);

  background-color: ${(props) => props.theme.Ice300};

  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  background-color: ${(props) => props.theme.Ice300};

  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;
