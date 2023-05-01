import { Header as StyledHeader, LeftContainer, RightContainer } from "./style"
import Button from '../Button' 
import logo from '../../assets/logo-dio.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <StyledHeader>
        <LeftContainer>
            <img src={logo} />
        </LeftContainer>
        <RightContainer>
            <Link to="/">Home</Link>
            <Button text="Entrar"/>
            <Button text="Cadastrar"/>
        </RightContainer>
    </StyledHeader>
  )
}
