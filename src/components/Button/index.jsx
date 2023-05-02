/* eslint-disable react/prop-types */
import { Button as StyledButton } from "./style"

export default function Button(props) {
  return (
    <StyledButton btnStyle={ props.btnStyle }>
        { props.text }
    </StyledButton>
  )
}
