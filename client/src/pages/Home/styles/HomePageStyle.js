import styled from "styled-components";

export const CalendarWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 300px;
    margin-top: 20px;
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
