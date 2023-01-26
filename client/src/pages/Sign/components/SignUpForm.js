import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";

import { FormWrapper, PasswordRules, SubmitButton } from "../styles/FormStyle";
import { formTheme } from "./FormTheme";

export default function SignUpForm() {
  const [showPassword, SetShowPassword] = useState(false);
  const handleClickShowPassword = () => SetShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const error = true;

  return (
    <FormWrapper
      onSubmit={() => {
        console.log("submited");
      }}
    >
      <ThemeProvider theme={formTheme}>
        <TextField
          required
          id="standard-search"
          label="Email:"
          type="email"
          variant="standard"
          sx={{ mt: "5px", width: "90%" }}
        />
      </ThemeProvider>
      <FormControl
        sx={{ mt: "10px", width: "90%" }}
        variant="standard"
        error={false}
      >
        <ThemeProvider theme={formTheme}>
          <InputLabel required htmlFor="standard-adornment-password">
            Senha:
          </InputLabel>
          <Input
            required
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </ThemeProvider>
        <FormHelperText error={false} id="component-helper-text">
          {error ? "Senha inválida" : ""}
        </FormHelperText>
      </FormControl>
      <PasswordRules>
        <h1>Sua senha deve conter no mínimo:</h1>
        <h2>6 caracteres</h2>
        <h2>1 letra maiúscula</h2>
        <h2>1 número</h2>
        <h2>1 caractere especial</h2>
      </PasswordRules>
      <FormControl
        sx={{ mt: "10px", width: "90%" }}
        variant="standard"
        error={false}
      >
        <InputLabel required htmlFor="standard-adornment-password">
          Confirmar senha:
        </InputLabel>
        <Input
          required
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          helperText="Senhas não conferem"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error={false} id="component-helper-text">
          {error ? "Senha inválida" : ""}
        </FormHelperText>
      </FormControl>
      <SubmitButton type="submit">Criar</SubmitButton>
    </FormWrapper>
  );
}
