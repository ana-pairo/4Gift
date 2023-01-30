import styled from "styled-components";

export default function LogoutModal() {
  return (
    <TransparencyWrapper>
      <ModalWrapper>
        <ModalTitle>Deseja sair?</ModalTitle>
        <ButtonsWrapper>
          <CancelButton>Cancelar</CancelButton>
          <ConfirmButton>Sim</ConfirmButton>
        </ButtonsWrapper>
      </ModalWrapper>
    </TransparencyWrapper>
  );
}

const TransparencyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 5;

  background-color: rgba(255, 255, 255, 0.8);

  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  @media (max-width: 600px) {
    width: 90vw;
    height: 85vw;
    z-index: 6;

    background: #ededed;
    border-radius: 20px;
    /* border: 1px solid #dfb068; */
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    flex-direction: column;
  }
`;

const ModalTitle = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;

    font-weight: 600;
    font-size: 30px;
    color: #1f3b62;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonsWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;

    padding: 0 10vw;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ConfirmButton = styled.button`
  @media (max-width: 600px) {
    width: 30vw;
    height: 50px;

    border: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #1f3b62;
  }
`;

const CancelButton = styled.button`
  @media (max-width: 600px) {
    width: 30vw;
    height: 50px;

    border: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #1f3b62;
  }
`;
