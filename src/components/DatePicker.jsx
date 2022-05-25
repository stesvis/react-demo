import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/system";
import { Form } from "react-bootstrap";
import { TextField } from "@mui/material";

const AppDatePicker = ({ name, placeholder, value, ...otherProps }) => {
  const [date, setDate] = useState(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        Prop
        OpenPickerButtonProps={{
          sx: { color: "#eeeeee" },
        }}
        InputProps={{
          disableUnderline: true,
          sx: {
            "& .MuiInput-input": { color: "#eeeeee" },
          },
        }}
        onChange={setDate}
        // readOnly
        // renderInput={(params) => (
        //   <TextField
        //     {...params}
        //     className="form-control"
        //     aria-readonly="true"
        //     variant="standard"
        //     // inputProps={{ className: "form-control" }}
        //   />
        // )}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#282d36",
              borderRadius: ".25rem",
              paddingRight: "8px",
            }}>
            <Form.Control ref={inputRef} {...inputProps}></Form.Control>
            {InputProps?.endAdornment}
          </Box>
        )}
        value={date}
      />
    </LocalizationProvider>
  );
};

export default AppDatePicker;
