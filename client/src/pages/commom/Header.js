import styled from "styled-components";

export default function Header({ children }) {
  return <></>;
}

const HeaderWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 20vh;

    background-color: aqua;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
