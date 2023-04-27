import React from "react"
import InputMask from "react-input-mask"

import { Container } from "./styles"

export function MaskedInput(props) {
  return (
    <Container>
      <InputMask mask="9" min={0} max={5} {...props} />
    </Container>
  )
}
