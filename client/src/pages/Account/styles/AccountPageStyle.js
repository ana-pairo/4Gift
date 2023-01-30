import styled from "styled-components";

export const FormWrapper = styled.form`
  @media (max-width: 600px) {
    width: 100vw;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    padding: 0 10vw 0 5vw;
  }
`;

export const FormButton = styled.button`
  @media (max-width: 600px) {
    width: 125px;
    height: 43px;

    margin: 25px 0;

    font-weight: 700;
    font-size: 19px;

    border: none;
    color: #ffffff;
    border-radius: 8px;
    background-color: #dfb068;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
