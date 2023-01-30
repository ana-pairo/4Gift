import styled from "styled-components";
import photo from "../../assets/images/avatar.png";

export default function Header({ generic }) {
  return (
    <HeaderWrapper>
      <HeaderAvatar>
        <img alt="small avatar" src={photo} />
      </HeaderAvatar>
      <HeaderGreeting>
        <h1>Olá, Ana Paula</h1>
        {!generic ? <h2>Quem receberá um mimo hoje?</h2> : ""}
      </HeaderGreeting>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 70px;

    padding-left: 5vw;
    margin-top: 5vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderAvatar = styled.div`
  @media (max-width: 600px) {
    width: 20%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 100%;
      height: 80%;
      filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
    }
  }
`;

const HeaderGreeting = styled.div`
  @media (max-width: 600px) {
    width: 80%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;

    padding-left: 10px;
    color: #1f3b62;
    font-weight: 500;

    h1 {
      font-size: 25px;
      margin-bottom: 5px;
    }

    h2 {
      font-size: 15px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(50px);
    }
  }
`;
