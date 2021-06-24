import React from 'react';
import Form from '../../layouts/Form';
import Input from '../../controls/Input';
import TransferList from '../../components/Input/TransferList'

import { Grid } from '@material-ui/core';

// import { Container } from './styles';

export default function OrderForm() {
  return (
     <Form>
        <Grid container>
           <Grid item xs={6}>
              <Input 
                  name="clientName" 
                  label="Nome do Cliente"
               />
            </Grid>
            <Grid item xs={6}>
               <Input 
                  name="total" 
                  label="Total"
               />
            </Grid>
            <TransferList />
        </Grid>
     </Form>
   )
}