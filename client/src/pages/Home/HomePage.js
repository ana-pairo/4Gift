import Header from "../commom/Header";
import SearchBox from "../commom/Search";
import photo from "../../assets/images/avatar.png";
import {
  CalendarWrapper,
  Date,
  Warning,
  BirthdayList,
  Birthday,
} from "./styles/HomePageStyle";

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
      <BirthdayList>
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
      </BirthdayList>
    </>
  );
}
