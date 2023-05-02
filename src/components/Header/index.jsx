import { Header as StyledHeader, LeftContainer, RightContainer } from "./style"
import Button from '../Button' 
import logo from '../../assets/logo-dio.png'
import { Link, useNavigate  } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  }

  const navigateCadastro = () => {
    navigate('/register');
  }

  return (
    <StyledHeader>
        <LeftContainer>
            <img src={logo} />
        </LeftContainer>
        <RightContainer>
            <Link to="/">Home</Link>
            <Button text="Entrar" onClick={navigateLogin}/>
            <Button text="Cadastrar" onClick={navigateCadastro}/>
        </RightContainer>
    </StyledHeader>
  )
}
