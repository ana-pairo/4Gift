import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  return (
    <>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Procure por novos amigos" />
        <MagnifierWrapper>
          <AiOutlineSearch size={"30px"} color={"#1F3B62"} opacity={"0.5"} />
        </MagnifierWrapper>
        <UsersList>
          <div>o</div>
          <div>o</div>
          <div>sasss</div>
          <div>dd</div>
          <div>a</div>
        </UsersList>
      </SearchWrapper>
    </>
  );
}

const SearchWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: fit-content; //UM OU OUTRO QD ABRIR A CAIXA
    /* height: 200px; */
    margin-top: 20px;
    padding: 0 5vw;
    position: relative;

    /* background-color: black; */

    display: flex;
    justify-content: top;
    align-items: center;
    flex-direction: column;
  }
`;

const MagnifierWrapper = styled.div`
  @media (max-width: 600px) {
    /* background-color: black; */
    position: absolute;
    right: 7vw;
    top: 10px;
    z-index: 2;
  }
`;

const SearchInput = styled.input`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 50px;

    border: none;
    outline-color: #dfb068;
    background: #ffffff;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 0 11vw 0 5vw;

    font-size: 19px;
    color: rgba(31, 59, 98, 0.5);
    font-family: "Poppins", sans-serif;
    z-index: 2;
  }
`;

const UsersList = styled.div`
  @media (max-width: 600px) {
    display: flex;
    display: none; //QD ABRIR A CAIXA MUDAR DE FLEX PRA ONE
    background-color: #e7e7e7;
    justify-content: top;
    align-items: center;
    flex-direction: column;

    width: 90vw;
    position: absolute;
    padding-top: 55px;
    max-height: 200px;

    border-radius: 20px 20px 8px 8px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);

    overflow-y: scroll;

    div {
      min-height: 50px;
    }
  }
`;
