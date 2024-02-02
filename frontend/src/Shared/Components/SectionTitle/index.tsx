import { Container, Title } from "./styles";

export function SectionTitle({ text, children }: { text: string, children?: React.ReactElement }) {
  return (
    <Container>
      <Title>{text}</Title>

      {!!children && (
        <div id="actions">
          {children}
        </div>
      )}

    </Container>
  )
}