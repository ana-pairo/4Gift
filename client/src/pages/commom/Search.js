import styled from "styled-components";

export default function SearchBox() {
  return (
    <>
      <SearchWrapper>
        <SearchInput>o</SearchInput>
      </SearchWrapper>
    </>
  );
}

const SearchWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 50px;
    margin-top: 20px;
    padding: 0 5vw;

    /* background-color: aliceblue; */

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SearchInput = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background: #ffffff;
    opacity: 0.5;
    box-shadow: 0px 4px 20px #1f3b62;
    border-radius: 20px;
  }
`;
