import styled from "styled-components";

export const CalendarWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 300px;
    margin-top: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Date = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: fit-content;
    margin-top: 20px;
    padding: 0 5vw;

    display: flex;
    justify-content: left;
    align-items: center;

    color: #1f3b62;
    font-size: 20px;
  }
`;

export const Warning = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    margin-top: 10px;
    padding: 0 5vw;

    display: flex;
    justify-content: left;
    align-items: center;

    font-size: 15px;
    color: #bababa;
  }
`;

export const BirthdayList = styled.div`
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
