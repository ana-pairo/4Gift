import { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  ThemeProvider,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
  FormControl,
  FormHelperText,
} from "@mui/material";

import { FormWrapper, PasswordRules, SubmitButton } from "../styles/FormStyle";
import { formTheme } from "./FormTheme";

export default function SignUpForm({ submitSign, data, setData, isDisable }) {
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    repeatedPassword: false,
  });

  const [passwordRules, setPasswordRules] = useState({
    length: false,
    uppercase: false,
    symbol: false,
    number: false,
  });

  const [valid, setValid] = useState(false);
  const passwordLength = data["password"].length > 0;
  const repeteadLength = data["repeatedPassword"].length > 0;
  const emailLength = data["email"].length > 0;
  const validEmail =
    data["email"].match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;
  const passwordsCheck = data["password"] === data["repeatedPassword"];
  const isButtonEnable = valid && passwordsCheck && validEmail;

  const ShowPasswords = (e) => {
    setShowPasswords({
      ...showPasswords,
      [e]: !showPasswords[e],
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkPassword = (e) => {
    const value = e.target.value;
    setPasswordRules({
      ...passwordRules,
      length: value.length > 5,
      uppercase: value.match(/[A-Z]/) !== null,
      symbol: value.match(/[^A-Z a-z0-9]/) !== null,
      number: value.match(/\d+/) !== null,
    });

    const isValid =
      value.length > 5 &&
      value.match(/\d+/) !== null &&
      value.match(/[A-Z]/) !== null &&
      value.match(/[^A-Z a-z0-9]/) !== null;

    if (isValid) setValid(true);
    if (!isValid) setValid(false);
  };

  return (
    <FormWrapper onSubmit={submitSign}>
      <ThemeProvider theme={formTheme}>
        <TextField
          required
          disabled={isDisable}
          name="email"
          error={!validEmail && emailLength}
          value={data.email}
          onChange={handleFormData}
          label="Email:"
          type="email"
          variant="standard"
          sx={{ mt: "5px", width: "90%" }}
        />
      </ThemeProvider>
      <FormControl
        sx={{ mt: "10px", width: "90%" }}
        variant="standard"
        error={!valid && passwordLength}
        disabled={isDisable}
      >
        <ThemeProvider theme={formTheme}>
          <InputLabel required htmlFor="standard-adornment-password">
            Senha:
          </InputLabel>
          <Input
            required
            name="password"
            value={data.password}
            onChange={(e) => {
              handleFormData(e);
              checkPassword(e);
            }}
            type={showPasswords["password"] ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => ShowPasswords("password")}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPasswords.password ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </ThemeProvider>
        <FormHelperText
          error={!valid && passwordLength}
          id="component-helper-text"
        >
          {passwordLength ? (valid ? "" : "Senha inválida") : " "}
        </FormHelperText>
      </FormControl>
      <PasswordRules>
        <h1>Sua senha deve conter no mínimo:</h1>
        <h2
          style={{
            color: `${
              passwordLength ? (passwordRules["length"] ? "green" : "red") : ""
            }`,
          }}
        >
          6 caracteres
        </h2>
        <h2
          style={{
            color: `${
              passwordLength
                ? passwordRules["uppercase"]
                  ? "green"
                  : "red"
                : ""
            }`,
          }}
        >
          1 letra maiúscula
        </h2>
        <h2
          style={{
            color: `${
              passwordLength ? (passwordRules["number"] ? "green" : "red") : ""
            }`,
          }}
        >
          1 número
        </h2>
        <h2
          style={{
            color: `${
              passwordLength ? (passwordRules["symbol"] ? "green" : "red") : ""
            }`,
          }}
        >
          1 caractere especial
        </h2>
      </PasswordRules>
      <FormControl
        sx={{ mt: "10px", width: "90%" }}
        variant="standard"
        error={!passwordsCheck && repeteadLength}
        disabled={isDisable}
      >
        <ThemeProvider theme={formTheme}>
          <InputLabel required htmlFor="standard-adornment-password">
            Confirmar senha:
          </InputLabel>
          <Input
            required
            name="repeatedPassword"
            value={data.repeatedPassword}
            onChange={handleFormData}
            id="standard-adornment-password"
            type={showPasswords["repeatedPassword"] ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => ShowPasswords("repeatedPassword")}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPasswords.repeatedPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText
            error={!passwordsCheck && repeteadLength}
            id="component-helper-text"
          >
            {!passwordsCheck && repeteadLength ? "Senhas não conferem" : " "}
          </FormHelperText>
        </ThemeProvider>
      </FormControl>
      <SubmitButton type="submit" disabled={!isButtonEnable || isDisable}>
        Criar
      </SubmitButton>
    </FormWrapper>
  );
}
