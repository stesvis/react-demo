import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import styled from 'styled-components';
// import './DatePicker.css'

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

const AppDatePickers = ({ name, placeholder, value, ajkjk, ...otherProps }) => {
  const [date, setDate] = useState(value);



  const color = {
    paddingRight: "8px",
    fontSize: "30px",
    color: "#eeeeee"
  }


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {
       
          <DatePicker
            InputProps={{
              disableUnderline: true,

            }}
            onChange={setDate}
            renderInput={(params) => {

              return (
                <>
                  <TextField
                    {...params}
                    className="form-control"

                    variant="standard"
                    inputProps={{ className: "form-control" }}
                    sx={{
                      svg: color,
                    }}
                  />

                </>

              )
            }}


            // render={({ inputRef, inputProps, InputProps }) => (
            //   <Box
            //     sx={{
            //       display: "flex",
            //       alignItems: "center",
            //       backgroundColor: "#282d36",
            //       borderRadius: ".25rem",
            //       paddingRight: "8px",
            //     }}>
            //     <Form.Control ref={inputRef} {...inputProps}></Form.Control>
            //     {InputProps?.endAdornment}
            //   </Box>
            // )}
            toolbarPlaceholder="aaaa"
            value={date}
          />
      }
    </LocalizationProvider>

  );
};

export default AppDatePickers;
