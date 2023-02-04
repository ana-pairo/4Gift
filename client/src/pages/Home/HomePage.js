import Header from "../commom/Header";
import SearchBox from "../commom/Search";
import { CalendarWrapper, Date, Warning } from "./styles/HomePageStyle";
import BirthDayList from "../commom/BirthdayList";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const userData = JSON.parse(localStorage.getItem("@Auth:user"));
  const isMissingData =
    userData?.displayName === null ||
    userData?.birthday === null ||
    userData?.phoneNumber === null;

  toast("Por favor, termine seu cadastro.");

  return isMissingData ? (
    <Navigate to="/account" />
  ) : (
    <>
      <Header generic={false}></Header>
      <SearchBox />
      <CalendarWrapper>CALENDÁRIO</CalendarWrapper>
      <Date>Sexta, 10/02</Date>
      <Warning>Aniversário de hoje:</Warning> {/* //ISSO OU O PROXIMO */}
      <BirthDayList />
    </>
  );
}
