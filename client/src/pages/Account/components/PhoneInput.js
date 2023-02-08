import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

export default function PhoneInput({
  mask,
  variant,
  value,
  isInputDisabled,
  onChange,
  ...otherProps
}) {
  return (
    <InputMask
      mask={mask}
      value={value}
      onChange={onChange}
      disabled={isInputDisabled}
    >
      {() => (
        <TextField
          disabled={isInputDisabled}
          variant={variant}
          {...otherProps}
        />
      )}
    </InputMask>
  );
}
