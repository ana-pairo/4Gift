import styled from "styled-components";
import photo from "../../assets/images/avatar.png";

export default function BirthDayList() {
  return (
    <BirthdayWrapper>
      <Birthday>
        <img alt="friends avatar" src={photo} />
        <div>Nome do fulçano</div>
      </Birthday>
      <Birthday>
        <img alt="friends avatar 2" src={photo} />
        <div>Nome do fulçano</div>
      </Birthday>
      <Birthday>
        <img alt="friends avatar 3" src={photo} />
        <div>Nome do fulçss ssss ssansss wsso</div>
      </Birthday>
      <Birthday>
        <img alt="friends avatar 4" src={photo} />
        <div>Nome do fulçano</div>
      </Birthday>
      <Birthday>
        <img alt="friends avatar 5" src={photo} />
        <div>Nome do fulçano</div>
      </Birthday>
    </BirthdayWrapper>
  );
}

export const BirthdayWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    margin-top: 20px;
    padding: 0 5vw;

    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
  }
`;

export const Birthday = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: 70px;
    margin-bottom: 20px;

    background: #dfb068;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0 10px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }

    div {
      font-size: 19px;
      color: #ffffff;
      margin-left: 10px;
      white-space: nowrap;
      width: 60vw;
      height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
