import { Header as StyledHeader, LeftContainer, RightContainer } from "./style"
import Button from '../Button' 
import logo from '../../assets/logo-dio.png'

export default function Header() {
  return (
    <StyledHeader>
        <LeftContainer>
            <img src={logo} />
        </LeftContainer>
        <RightContainer>
            <a href="#"> Home </a>
            <Button text="Entrar"/>
            <Button text="Cadastrar"/>
        </RightContainer>
    </StyledHeader>
  )
}
