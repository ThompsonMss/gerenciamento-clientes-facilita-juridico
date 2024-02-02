import React, { ReactElement } from 'react'
import { } from './styles'
import { Row } from 'react-bootstrap';

export function FormRow({ children, style = {} }: { children: ReactElement<any>; style?: React.CSSProperties | undefined }) {

  const defaultStyles: React.CSSProperties = { width: '100%', margin: 0 }

  return (
    <Row style={{ ...defaultStyles, ...style }}>
      {children}
    </Row>
  )

}