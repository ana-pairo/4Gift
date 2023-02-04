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
} from "@mui/material";

import { FormWrapper, SubmitButton } from "../styles/FormStyle";
import { formTheme } from "../styles/FormTheme";

export default function SignInForm({ submitSign, data, setData, isDisable }) {
  const [showPassword, SetShowPassword] = useState(false);
  const handleClickShowPassword = () => SetShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const isButtonEnable =
    data["email"].length > 0 && data["password"].length > 0;

  return (
    <FormWrapper onSubmit={submitSign}>
      <ThemeProvider theme={formTheme}>
        <TextField
          required
          disabled={isDisable}
          name="email"
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
            onChange={handleFormData}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </ThemeProvider>
      </FormControl>
      <SubmitButton type="submit" disabled={isDisable || !isButtonEnable}>
        Entrar
      </SubmitButton>
    </FormWrapper>
  );
}
