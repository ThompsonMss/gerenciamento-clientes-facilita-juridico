import React, { ReactElement } from 'react';
import { Container, ContainerLoad } from './styles'
import { LoadComponent } from '@Shared/Components/Load';

export function FormContainer({ id, children, hasButtonFlutuante = false, load = false, style = {}, noPaddingAndBackground = false }: { id?: string; children: ReactElement<any>, hasButtonFlutuante?: boolean; load?: boolean; style?: React.CSSProperties, noPaddingAndBackground?: boolean }) {
  
  if(load){
    return (
      <ContainerLoad>
        <LoadComponent />
      </ContainerLoad>
    );
  }
  
  return (
    <Container id={id} style={style} hasButtonFlutuante={!!hasButtonFlutuante} noPaddingAndBackground={!!noPaddingAndBackground}>
      {children}
    </Container>
  );
}