import styled from "styled-components";
import { BsPersonLinesFill, BsGearFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import { modals } from "./ModalList";

export default function Menu() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          setIsMenuOpen(false);
        }}
      >
        <Menuwrapper>
          <BsPersonLinesFill
            size={"45px"}
            color={"#ededed"}
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/friends");
            }}
          />
          <BsGearFill
            size={"45px"}
            color={"#ededed"}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />

          <SubMenuWrapper isMenuOpen={isMenuOpen}>
            <div>
              <VscSignOut
                size={"45px"}
                color={"#ededed"}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                  // navigate("/");
                  //TO DO
                  // LIMPAR STORAGE
                }}
              />
            </div>
            <div>
              <MdManageAccounts
                size={"45px"}
                color={"#ededed"}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/account");
                }}
              />
            </div>
          </SubMenuWrapper>
          <HomeWrapper>
            <div>
              <AiFillHome
                size={"45px"}
                color={"#ededed"}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/home");
                }}
              />
            </div>
          </HomeWrapper>
        </Menuwrapper>
      </ClickAwayListener>
      {isModalOpen ? <modals.Logout setIsModalOpen={setIsModalOpen} /> : ""}
    </>
  );
}

const Menuwrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 82px;
    padding: 5px 10vw;
    border-radius: 20px;

    background-color: #1f3b62;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;

    box-shadow: 0 0px 10px 5px #ededed;

    z-index: 1;
  }
`;

const HomeWrapper = styled.div`
  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;
    background-color: #ededed;

    position: absolute;
    top: -35px;
    left: calc(50vw - 35px);

    div {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 5px;
      padding-left: 2px;

      border-radius: 100%;
      background: radial-gradient(#85a3cc, #1f3b62);
      box-shadow: 0 -5px 10px 5px #ededed;
    }
  }
`;

const SubMenuWrapper = styled.div`
  @media (max-width: 600px) {
    width: 60px;
    height: ${(props) => (props.isMenuOpen ? "218px" : "0px")};
    transition: height 2s;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    z-index: -1;

    background: #1f3b62;
    border-radius: 10px;

    position: fixed;
    right: 8vw;
    bottom: 0;
    padding-bottom: 82px;

    overflow-y: scroll;

    div:nth-child(2) {
      margin-bottom: 5px;
    }

    div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
`;
