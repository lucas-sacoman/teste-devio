import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm } from '../hooks/useForm';

import OrderForm from './OrderForm';
import TransferList from '../Input/TransferList';
import TransferedList from '../Input/TransferedList';

const getFreshModelObject = () => ({
  orderMasterId: 0,
  customerId: '',
  gTotal: 0,
  deletedOrderItemIds: '',
  orderDetails: []
})

export default function Order() {

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls
  } = useForm(getFreshModelObject);

  return (
    <Grid container>
      <Grid item xs={12}>
        <OrderForm 
          {...{
            values,
            setValues,
            errors,
            setErrors,
            handleInputChange,
            resetFormControls
        }}
        />
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <TransferList 
            {...{values, setValues}}
          />
        </Grid>
        <Grid item xs={6}>
          <TransferedList 
            {...{values, setValues}}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

