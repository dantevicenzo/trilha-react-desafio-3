/* eslint-disable react/prop-types */
import { Button as StyledButton } from "./style"

export default function Button({text}) {
  return (
    <StyledButton>
        {text}
    </StyledButton>
  )
}
