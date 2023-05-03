/* eslint-disable react/prop-types */
import { IconContainer, InputContainer, InputText } from "./style";


export default function Input({ icon, ...rest}) {
  return (
    <InputContainer>
        <IconContainer>{ icon }</IconContainer>
        <InputText {...rest} />
    </InputContainer>
  )
}
