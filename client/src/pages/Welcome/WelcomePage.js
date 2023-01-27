import blueLogo from "../../assets/images/4gift_logo_azul.png";
import { FadeIn, SlideInLeft, FadeInDown } from "../../utils/AnimationsList";

import {
  FirstScreen,
  Header,
  HeaderWrapper,
  ButtonOptions,
  Button,
  Footer,
  Logo,
} from "./styles/WelcomeStyle";

import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <FadeIn>
      <FirstScreen>
        <Header>
          <FadeInDown delay="0.5s">
            <HeaderWrapper>
              <img alt="blue logo" src={blueLogo} />
              <ButtonOptions>
                <Button visibility={"optional"}>Entrar</Button>
                <Button
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  Cadastrar
                </Button>
              </ButtonOptions>
            </HeaderWrapper>
          </FadeInDown>
        </Header>
        <Footer>
          <SlideInLeft delay="0.5s">
            <h1>Never forget,</h1>
          </SlideInLeft>
          <SlideInLeft delay="1s">
            <div>
              <h2>Always</h2>
              <Logo color={"#FFFFFF"}>4Gift</Logo>
            </div>
          </SlideInLeft>
        </Footer>
      </FirstScreen>
    </FadeIn>
  );
}
