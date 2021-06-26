import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
   const { 
      name, 
      label, 
      value, 
      variant,
      onChange, 
      error = null, 
      ...other } = props;
   
   return (
      <TextField 
         name={name}
         label={label}
         value={value}
         variant={variant || "outlined"}
         onChange={onChange}
         {...other}
         {...(error && { error: true, helperText: error })}
      />
   )
}
