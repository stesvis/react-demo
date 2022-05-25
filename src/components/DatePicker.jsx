// import "./DatePicker.css";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/system";
import { Form } from "react-bootstrap";
import { TextField } from "@mui/material";

const AppDatePicker = ({ name, placeholder, value, ajkjk, ...otherProps }) => {
  const [date, setDate] = useState(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        //   Style Props --- start
        PaperProps={{
          sx: {
            backgroundColor: "#000000",
            color: "#eeeeee",
            "& .MuiButtonBase-root": {
              //   backgroundColor: "#282d36",
              color: "#ffffff",
            },
            "& .MuiPickersArrowSwitcher-button": {
              backgroundColor: "#282d36",
              color: "#ffffff",
            },
            "& .MuiTypography-caption": {
              color: "#eeeeee",
            },
            "& .MuiTypography-caption:first-child": {
              color: "red",
            },
            "& .MuiTypography-caption:last-child": {
              color: "red",
            },
            "& .MuiPickersDay-root": {
              backgroundColor: "#282d36",
              color: "#ffffff",
            },
            "& .MuiPickersDay-today": {
              backgroundColor: "#85292c !important",
              color: "#ffffff",
            },
            "& .Mui-selected": {
              backgroundColor: "#d3121a !important",
              color: "#ffffff",
            },
          },
        }}
        InputProps={{
          disableUnderline: true,
          sx: {
            "& .MuiInput-input": { color: "#eeeeee" },
          },
        }}
        OpenPickerButtonProps={{
          sx: { color: "#eeeeee" },
        }}
        //   Style Props --- end
        inputFormat="d MMM, yyyy"
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
              width: "100%",
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
