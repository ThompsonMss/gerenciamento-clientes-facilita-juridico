import styled, { css } from "styled-components";

export const Container = styled.div<{ hasButtonFlutuante: boolean; noPaddingAndBackground: boolean; }>`
  
  ${props => {
    if (props.noPaddingAndBackground === false) {
      return css`
        background-color: ${props => props.theme.Ice100};
        padding: 1rem;
      `;
    }
  }};
  
  border-radius: 8px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 768px){
    margin-bottom: calc((${props => props.hasButtonFlutuante ? '4.75rem' : '0rem'}) + 1rem); // Margin para caso exista botão flutuante. (Ex.: PageSection.HeaderSection)
    
    ${props => {
    if (props.noPaddingAndBackground === false) {
      return css`
        background-color: ${props => props.theme.Ice100};
        padding: 1rem;
      `;
      }
    }}

  }
`;

export const ContainerLoad = styled.div`
  background-color: ${props => props.theme.Ice100};
  padding: 1rem;
  border-radius: 8px;

  width: 100%;
  height: calc(100vh - 14rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;