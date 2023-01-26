import signInGoogle from "../../services/signIn";

import { FadeIn, SlideInUp } from "../../assets/animations/AnimationsList";
import { SecondScreen, Header, SignWrapper } from "./styles/SignStyle";

export default function SignUp() {
  return (
    <SecondScreen>
      <Header>
        <FadeIn>
          <h1>4Gift</h1>
        </FadeIn>
      </Header>
      <SlideInUp>
        <SignUpWrapper></SignUpWrapper>
      </SlideInUp>
    </SecondScreen>
  );
}
