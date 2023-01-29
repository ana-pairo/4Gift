import styled from "styled-components";

export const PageTitle = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 30px;
    margin-top: 20px;
    padding: 0 5vw;

    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;

    font-weight: 400;
    font-size: 22px;
    color: #1f3b62;

    div {
      position: absolute;
      right: 5vw;
      display: flex;
      justify-content: center;
    }
  }
`;
