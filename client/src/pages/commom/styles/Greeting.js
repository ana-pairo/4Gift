import styled from "styled-components";

export const Greeting = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: fit-content;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 0 5px;

    font-weight: 500;
    font-size: 25px;
    color: #1f3b62;
  }
`;
