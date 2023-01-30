import Header from "../commom/Header";
import SearchBox from "../commom/Search";
import { PageTitle } from "../commom/styles/PageTitle";
import { Break, Line } from "../Sign/styles/SignStyle";
import styled from "styled-components";
import BirthDayList from "../commom/BirthdayList";

export default function FriendsList() {
  return (
    <>
      <Header generic={true}></Header>
      <SearchBox />
      <PageTitle>Sua lista de amigos:</PageTitle>
      <MonthBreak>
        <FirstLine />
        <h1>Janeiro</h1>
        <SecondLine />
      </MonthBreak>
      <BirthDayList />
      <MonthBreak>
        <FirstLine />
        <h1>Fevereiro</h1>
        <SecondLine />
      </MonthBreak>
      <BirthDayList />
      <MonthBreak>
        <FirstLine />
        <h1>Dezembro</h1>
        <SecondLine />
      </MonthBreak>
      <BirthDayList />
    </>
  );
}

const MonthBreak = styled(Break)`
  width: 100vw;
  padding: 0 5vw;
  h1 {
    margin: 0 5px;
  }
`;

const FirstLine = styled(Line)`
  width: 10%;
`;

const SecondLine = styled(Line)`
  width: 100%;
`;
