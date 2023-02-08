import { useContext, useState } from "react";

import { BiTrash } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";

import { TextField, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { toast } from "react-toastify";
import dayjs from "dayjs";

import {
  AvatarContainer,
  AvatarOptions,
  AvatarWrapper,
} from "../commom/styles/Avatar";
import avatar from "../../assets/images/avatar.png";
import PhoneInput from "./components/PhoneInput";
import { Greeting } from "../commom/styles/Greeting";
import { PageTitle } from "../commom/styles/PageTitle";
import { FormButton, FormWrapper } from "./styles/AccountPageStyle";
import { formTheme } from "../Sign/styles/FormTheme";

import { UserContext } from "../../contexts/UserContext";

export default function Account() {
  const { userData } = useContext(UserContext);
  const isMissingData =
    userData?.displayName === null ||
    userData?.birthday === null ||
    userData?.phoneNumber === null;

  if (isMissingData) toast("Por favor, termine seu cadastro.");

  console.log(userData);
  const [isDisable, setIsDisable] = useState(false);
  const [isFormDisable, setIsFormDisable] = useState(!isMissingData);

  console.log(isFormDisable);
  const [formData, setFormData] = useState({
    displayName: userData.displayName === null ? "" : userData.displayName,
    phoneNumber: userData.phoneNumber === null ? "" : userData.phoneNumber,
    birthday: userData.birthday === null ? null : userData.birthday,
  });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  async function submitAccountData(e) {
    e.preventDefault();
    setIsDisable(true);

    // FUNÇÃO SALVAR OS DADOS

    toast("Informações salvas com sucesso!");

    setIsFormDisable(true);
    setIsDisable(false);
  }

  return (
    <>
      <AvatarContainer>
        <AvatarWrapper>
          {userData?.photoURL ? (
            <img alt="profile avatar" src={userData.photoURL} />
          ) : (
            <img alt="default profile avatar" src={avatar} />
          )}
          <AvatarOptions type={"delete"}>
            <BiTrash size={"70%"} color={"#ededed"} />
          </AvatarOptions>
          <AvatarOptions type={"edit"}>
            <AiOutlineEdit
              onClick={() => {
                toast("Feature em desenvolvimento");
              }}
              size={"70%"}
              color={"#ededed"}
            />
          </AvatarOptions>
        </AvatarWrapper>
      </AvatarContainer>
      <Greeting>
        {userData.displayName ? "Olá, " + userData.displayName : "Olá"}
      </Greeting>

      <PageTitle>
        Informações do perfil
        {isFormDisable ? (
          <div>
            <AiOutlineEdit
              size={"30px"}
              color={"#DFB068"}
              onClick={() => setIsFormDisable(false)}
            />
          </div>
        ) : (
          ""
        )}
      </PageTitle>

      <FormWrapper onSubmit={submitAccountData}>
        <ThemeProvider theme={formTheme}>
          <TextField
            disabled={isFormDisable}
            required
            label="Apelido:"
            name="displayName"
            variant="standard"
            value={formData.displayName}
            onChange={handleFormData}
            type="text"
            sx={{ mb: "30px", width: "100%" }}
          />
          <PhoneInput
            isInputDisabled={isFormDisable}
            required
            label="Telefone:"
            name="phoneNumber"
            variant="standard"
            value={formData.phoneNumber}
            onChange={handleFormData}
            mask={"(99) 99999-9999"}
            sx={{ mb: "30px", width: "100%" }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Data de aniversário:"
              disabled={isFormDisable}
              type="date"
              name="birthday"
              variant="standard"
              inputFormat="DD/MM/YYYY"
              renderInput={(params) => (
                <TextField
                  required
                  sx={{ mb: "30px", mt: "10px", width: "100%" }}
                  {...params}
                />
              )}
              value={formData.birthday}
              onChange={(newValue) => {
                setFormData({
                  ...formData,
                  birthday: dayjs(newValue).toISOString(),
                });
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </LocalizationProvider>
        </ThemeProvider>
        {isFormDisable ? (
          ""
        ) : (
          <FormButton type="submit" disabled={isDisable}>
            Salvar
          </FormButton>
        )}
      </FormWrapper>
    </>
  );
}
