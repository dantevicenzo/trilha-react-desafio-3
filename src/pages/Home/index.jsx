import { Column, Main, Title } from "./style";
import Button from "../../components/Button"
import imageHome from '../../assets/image-home.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const navigateCadastro = () => {
    navigate('/register');
  }

    return (
      <Main>
        <Column>
          <div>
            <Title color="pink">Implemente</Title>
            <Title>o seu futuro global agora!</Title>
            <p>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
          </div>
          <Button btnStyle="pink" text="Começar agora" onClick={navigateCadastro}/>
        </Column>
        
          <img src={imageHome} />
        
      </Main>
    )
  }
  