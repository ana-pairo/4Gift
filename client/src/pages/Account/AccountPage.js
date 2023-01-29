import { useContext, useState } from "react";

import { BiTrash } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";

import {
  AvatarContainer,
  AvatarOptions,
  AvatarWrapper,
} from "../commom/styles/Avatar";
import avatar from "../../assets/images/avatar.png";

import { Greeting } from "../commom/styles/Greeting";
import { PageTitle } from "../commom/styles/PageTitle";
import { FormButton, FormWrapper } from "./styles/AccountPageStyle";
import { formTheme } from "../Sign/components/FormTheme";
import { TextField, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Account() {
  const [value, setValue] = useState(null);

  return (
    <>
      <AvatarContainer>
        <AvatarWrapper>
          {/* {userData?.photoURL ? (
          <img alt="profile avatar" src={userData.photoURL} />
        ) : ( */}
          <img alt="default profile avatar" src={avatar} />
          {/* )} */}
          <AvatarOptions type={"delete"}>
            <BiTrash size={"70%"} color={"#ededed"} />
          </AvatarOptions>
          <AvatarOptions type={"edit"}>
            <AiOutlineEdit size={"70%"} color={"#ededed"} />
          </AvatarOptions>
        </AvatarWrapper>
      </AvatarContainer>
      <Greeting>
        Olá
        {/* {userData.displayName ? "Olá, " + userData.displayName : "Olá"}*/}
      </Greeting>

      <PageTitle>
        Informações do perfil
        <div>
          <AiOutlineEdit size={"30px"} color={"#DFB068"} />
        </div>
      </PageTitle>

      <FormWrapper>
        <ThemeProvider theme={formTheme}>
          <TextField
            required
            // disabled={isDisable}
            name="displayName"
            // value={data.email}
            // onChange={handleFormData}
            label="Apelido:"
            type="text"
            variant="standard"
            sx={{ mb: "10px" }}
          />

          <TextField
            required
            // disabled={isDisable}
            name="phoneNumber"
            label="Telefone:"
            type="number"
            variant="standard"
            sx={{ mb: "30px" }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs} required>
            <DatePicker
              format="dd-MM-yyyy"
              label="Data de aniversário: *"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </ThemeProvider>

        <FormButton type="submit">Salvar</FormButton>
      </FormWrapper>
    </>
  );
}
