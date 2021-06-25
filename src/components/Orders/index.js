import React from 'react';
import { Grid } from '@material-ui/core';

import OrderForm from './OrderForm';
import TransferList from '../Input/TransferList';
import Button from '../Input/Button';

// import { Container } from './styles';

export default function Order() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <OrderForm />
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <TransferList />
        </Grid>
        <Grid item xs={6}>
          <Button />
        </Grid>
      </Grid>
    </Grid>
  )
}

