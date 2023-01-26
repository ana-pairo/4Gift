import styled from "styled-components";

const FormWrapper = styled.form`
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: "Poppins", sans-serif;
  }
`;

const PasswordRules = styled.div`
  @media (max-width: 600px) {
    width: 90%;
    height: fit-content;

    margin-top: 10px;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    font-size: 15px;
    line-height: 22px;
    color: #77869e;

    h2 {
      margin-left: 10px;
      color: ${(props) => (props.color ? "#5CD1B4" : "FF0043")};
    }
  }
`;

const SubmitButton = styled.button`
  @media (max-width: 600px) {
    width: 90%;
    height: 50px;
    margin-top: 15px;

    background-color: #ededed;
    border-radius: 10px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #1f3b62;
    font-size: 20px;
    font-weight: 700;
  }
`;

export { FormWrapper, PasswordRules, SubmitButton };
