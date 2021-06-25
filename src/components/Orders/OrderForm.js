import React from 'react';
import Form from '../../layouts/Form';
import Input from '../../controls/Input';

import { Grid, InputAdornment } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

// import { Container } from './styles';

export default function OrderForm() {
  return (
     <Form>
        <Grid container>
           <Grid item xs={6}>
              <Input 
                  name="clientName" 
                  label="Nome do Cliente"
                  color="primary"
               />
            </Grid>
            <Grid item xs={6}>
               <Input 
                  disabled
                  name="total" 
                  label="Total"
                  InputProps={{
                     startAdornment: <InputAdornment>
                        <AttachMoneyIcon color="action" /></InputAdornment>
                  }}
               />
            </Grid>
        </Grid>
     </Form>
   )
}