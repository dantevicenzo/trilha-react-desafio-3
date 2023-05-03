import Button from "../../components/Button";
import Input from "../../components/Input";
import { Column, Main, Row, Link } from "./style";
import { MdEmail, MdLock } from 'react-icons/md';

export default function Login() {
    return (
      <Main>
        <Column>
          <h1>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h1>
        </Column>
        <Column minWidth="300px">
          <h1>Faça seu cadastro</h1>
          <p>Faça seu login e make the change._</p>
          
          <form>
            <Input type="email" icon={ <MdEmail color='red'/> } placeholder="E-mail"></Input>
            <Input type="password" icon={ <MdLock /> } placeholder="Password"></Input>
            <Button btnStyle="pink w100" text="Entrar"/>
          </form>
          
          <Row>
            <Link color="#E5E044" href="#">Esqueci minha senha</Link>
            <Link color="#23DD7A" href="#/register">Criar conta</Link>
          </Row>
        </Column>
      </Main>
    )
  }
  