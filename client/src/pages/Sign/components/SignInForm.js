import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

import { FormWrapper, SubmitButton } from "../styles/FormStyle";

export default function SignInForm() {
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
      <TextField
        required
        error={error}
        id="standard-search"
        label="Email:"
        type="email"
        variant="standard"
        sx={{ mt: "5px", width: "90%" }}
      />

      <FormControl
        sx={{ mt: "10px", width: "90%" }}
        variant="standard"
        error={error}
      >
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
        <FormHelperText error={error} id="component-helper-text">
          {error ? "Senha ou email inválidos" : ""}
        </FormHelperText>
      </FormControl>
      <SubmitButton type="submit">Entrar</SubmitButton>
    </FormWrapper>
  );
}
