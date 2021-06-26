import React, { useEffect } from 'react';
import Form from '../../layouts/Form';
import Input from '../../controls/Input';
import Button from '../Input/Button';
import { roundTo2DecimalPoint } from "../../utils/utils";

import { Grid, InputAdornment, makeStyles } from '@material-ui/core';

// import { Container } from './styles';

const useStyles = makeStyles (theme => ({
   adornmentText: {
       '& .MuiTypography-root': {
           color: '#00FF00',
           fontWeight: '500',
           fontSize: '1.5em'
       }
   },

   clientContainer: {
      marginBottom : '-2rem'
   },

   subTitle: {
      fontFamily: 'Poppins',
      marginLeft: '5.5rem',
      marginTop: '0'
   }
}))

export default function OrderForm(props) {

   const { values, setValues, errors, setErrors } = props;
   const classes = useStyles();

   useEffect(() => {
      let gTotal = values.orderDetails.reduce((tempTotal, item) => {
          return tempTotal + (item.quantity * item.foodItemPrice);
      }, 0);
      setValues({
          ...values,
          gTotal: roundTo2DecimalPoint(gTotal)
      })

  }, [JSON.stringify(values.orderDetails)]);

  const validateForm = () => {
     let temp = {};
   //   temp.customerId = values.customerId !== "" ? "" : "Preencha esse campo";
     temp.gTotal = values.gTotal !== 0 ? "" : "Adicione um pedido";
     setErrors({...temp});
     
     return Object.values(temp).every(x => x === "")
  }

  const submitOrder = e => {
      e.preventDefault();
      if(validateForm()) {

      }
  }

  return (
     <Form onSubmit={submitOrder}>
        <Grid container>
           <Grid item xs={6} className={classes.clientContainer}>
              <Input  
                  name="clientName"
                  label="Nome do Cliente"
                  color="primary"
                  // value={values.customerId}
                  // error={errors.customerId}
               />
               <h2 className={classes.subTitle}>
                  Escolha as pizzas aqui !
               </h2>
            </Grid>
            <Grid item xs={6}>
            <Input
               disabled
               label="Total"
               name="Total"
               value={values.gTotal}
               error={errors.gTotal}
               InputProps={{
                  startAdornment: <InputAdornment
                     className={classes.adornmentText}
                     position="start">R$</InputAdornment>
               }}
            />
            <Button type="submit" />
            </Grid>
        </Grid>
     </Form>
   )
}