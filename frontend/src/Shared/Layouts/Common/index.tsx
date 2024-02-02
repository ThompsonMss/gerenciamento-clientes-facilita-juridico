import { ReactElement } from 'react'
import { Container, Content } from './styles'
import { Header } from '@Shared/Components/Header';

interface PropsDashboard {
  children: ReactElement<any>;
}

export function Common(props: PropsDashboard) {

  return (
    <Container>
      <Header />

      <Content>
        {props.children}
      </Content>
    </Container>
  )

}