import styled, { keyframes } from "styled-components";
import BaseAnimation from "./BaseAnimation";

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SlideInLeftAnimation = keyframes`
  from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
`;

const FadeInDownAnimation = keyframes`
  from {
     opacity: 0;
     transform: translate3d(0, -100%, 0);
   }
   to {
     opacity: 1;
     transform: none;
   }
`;

const SlideInUpAnimation = keyframes`
  from {
     transform: translateY(100%);
     visibility: visible;
   }
   to {
    transform: translateY(30%);
   }
`;

const SlideInLeft = styled(BaseAnimation)`
  animation-name: ${SlideInLeftAnimation};
`;

const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;

const FadeInDown = styled(BaseAnimation)`
  animation-name: ${FadeInDownAnimation};
`;

const SlideInUp = styled(BaseAnimation)`
  animation-name: ${SlideInUpAnimation};
`;

export { FadeIn, SlideInLeft, FadeInDown, SlideInUp };
