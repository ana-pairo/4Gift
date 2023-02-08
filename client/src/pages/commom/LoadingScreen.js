import styled from "styled-components";
// import loadingLogo from "../../assets/animations/4gift_animation_crop.gif";

export default function LoadingScreen() {
  return (
    <LoadingWrapper>
      {/* <img alt="loading logo" src={loadingLogo} /> */}
      Carregando....
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(237, 237, 237, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
