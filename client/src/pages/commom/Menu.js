import styled from "styled-components";
import { BsPersonLinesFill, BsFillGearFill, BsGearFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

export default function Menu() {
  return (
    <>
      <Menuwrapper>
        <BsPersonLinesFill size={"45px"} color={"#ededed"} />
        <BsGearFill size={"45px"} color={"#ededed"} />
        <HomeWrapper>
          <div>
            <AiFillHome size={"45px"} color={"#ededed"} />
          </div>
        </HomeWrapper>
      </Menuwrapper>
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
