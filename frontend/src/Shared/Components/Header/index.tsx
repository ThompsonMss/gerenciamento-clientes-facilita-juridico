import { sistemaConstants } from "@Shared/Constants/sistemaConstants";
import { Container, Title } from "./styles";

export function Header() {

  return (
    <Container>
      <div id="content-header">
        <Title>{sistemaConstants.nomeDoSistema} <span>{sistemaConstants.versaoDoSistema}</span></Title>
      </div>
    </Container>
  )

}