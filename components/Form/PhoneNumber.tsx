import { forwardRef } from "react";
import TextField from "@mui/material/TextField";

const phoneInput: any = (props: any, ref: any) => {
  return (
    <TextField
      {...props}
      inputRef={ref}
      fullWidth
      size="small"
      label="Phone Number"
      variant="standard"
      name="phone"
    />
  );
};
export default forwardRef(phoneInput);
