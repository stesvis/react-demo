import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import styled from 'styled-components';
import './DatePicker.css'

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

const AppDatePicker = ({ name, placeholder, value, ajkjk, ...otherProps }) => {
  const [date, setDate] = useState(value);




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

export default AppDatePicker;
