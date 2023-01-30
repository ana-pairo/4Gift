import Header from "../commom/Header";
import SearchBox from "../commom/Search";
import { CalendarWrapper, Date, Warning } from "./styles/HomePageStyle";
import BirthDayList from "../commom/BirthdayList";

export default function Home() {
  // const { userData } = useContext(AuthContext);

  // return userData.displayName && userData.birthday ? (
  //   <div>HOME</div>
  // ) : (
  // <Navigate to="/account" />;
  // );

  return (
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
