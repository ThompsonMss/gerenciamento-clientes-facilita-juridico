import { Typography } from "@Shared/Components/Typography";
import styled from "styled-components";

export const Title = styled(Typography.BodyLarge)`
  color: ${props => props.theme.Dark500};
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;

  border-bottom: 1px solid ${props => props.theme.Ice500};
  width: 100%;
`;