import { ClickAwayListener } from "@mui/base";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../services/firebaseConfig";
import { signOut } from "firebase/auth";
import styled from "styled-components";

function Logout({ setIsModalOpen, cleanLocalStorage, setUserData }) {
  const navigate = useNavigate();
  return (
    <TransparencyWrapper>
      <ClickAwayListener
        onClickAway={() => {
          setIsModalOpen(false);
        }}
      >
        <ModalWrapper>
          <ModalTitle>Deseja sair?</ModalTitle>
          <ButtonsWrapper>
            <CancelButton
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Cancelar
            </CancelButton>
            <ConfirmButton
              onClick={async () => {
                cleanLocalStorage();
                setUserData(null);
                setIsModalOpen(false);

                try {
                  await signOut(auth);
                } catch (error) {
                  console.log(error);
                }

                navigate("/");
              }}
            >
              Sim
            </ConfirmButton>
          </ButtonsWrapper>
        </ModalWrapper>
      </ClickAwayListener>
    </TransparencyWrapper>
  );
}

// async function deleteAvatarPhoto(data) {
//   const response = await updateUser(data);

//   if (updateUserError)
//     toast("Não foi possível exluir sua imagem, tente novamente mais tarde");

//   setModalResponse(false);
//   setIsModalOpen(false);
//   setUserData({ ...response });
//   updateLocalStorageUser(response);
// }

// if (modalResponse) {
//   const data = {
//     photoURL: null,
//   };

//   deleteAvatarPhoto(data);
// }

function DeleteAvatar({
  setUserData,
  updateLocalStorageUser,
  setIsModalOpen,
  updateUser,
  updateUserError,
}) {
  return (
    <TransparencyWrapper>
      <ClickAwayListener
        onClickAway={() => {
          setIsModalOpen(false);
        }}
      >
        <ModalWrapper>
          <ModalTitle>Deseja excluir sua foto?</ModalTitle>
          <ButtonsWrapper>
            <CancelButton
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Cancelar
            </CancelButton>
            <ConfirmButton
              onClick={async () => {
                const data = {
                  photoURL: null,
                };

                const response = await updateUser(data);

                if (updateUserError) {
                  return toast(
                    "Não foi possível exluir sua imagem, tente novamente mais tarde"
                  );
                }

                setIsModalOpen(false);
                updateLocalStorageUser(response);
                setUserData({ ...response });
              }}
            >
              Sim
            </ConfirmButton>
          </ButtonsWrapper>
        </ModalWrapper>
      </ClickAwayListener>
    </TransparencyWrapper>
  );
}

export const modals = {
  Logout,
  DeleteAvatar,
};

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
    text-align: center;
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

    position: absolute;
    bottom: 20px;
  }
`;

const ConfirmButton = styled.button`
  @media (max-width: 600px) {
    width: 30vw;
    height: 50px;

    border: none;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #1f3b62;
    box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.5);

    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
  }
`;

const CancelButton = styled(ConfirmButton)`
  @media (max-width: 600px) {
    background-color: #ededed;
    color: #1f3b62;
    border: 1px solid #1f3b62;
  }
`;
