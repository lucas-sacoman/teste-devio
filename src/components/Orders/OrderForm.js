import React, { useEffect, useState } from 'react';
import Form from '../../layouts/Form';
import Input from '../../controls/Input';
import ButtonSubmit from '../Input/ButtonSubmit';
import { roundTo2DecimalPoint } from "../../utils/utils";

import { Grid, InputAdornment, makeStyles, Button } from '@material-ui/core';
import Popup from '../../layouts/Popup';
import OrderList from './OrderList'

const useStyles = makeStyles (theme => ({
   adornmentText: {
      '& .MuiTypography-root': {
         color: '#00FF00',
         fontWeight: '500',
         fontSize: '1.5em'
      }
   },

   ordersButton : {
      margin: '8px',
      padding: '0.9rem 9.8rem',
      marginTop: '-1px',
      fontFamily: 'Poppins',
      marginLeft: '5rem',
   },

   clientContainer: {
      marginBottom : '-2rem'
   },

   subTitle: {
      fontFamily: 'Poppins',
      marginLeft: '5.5rem',
      marginTop: '0',
   }
}))

export default function OrderForm(props) {

   const { values, setValues, errors, setErrors } = props;
   const [orderListVisibility, setOrderListVisibility] = useState(false);
   const classes = useStyles();

   useEffect(() => {
      let gTotal = values.orderDetails.reduce((tempTotal, item) => {
         return tempTotal + (item.quantity * item.foodItemPrice);
      }, 0);
      setValues({
         ...values,
         gTotal: roundTo2DecimalPoint(gTotal)
      })

   // eslint-disable-next-line react-hooks/exhaustive-deps
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

   
   function sentOrder() {
      const sentOrders = values.orderDetails;
      
      const orders = JSON.stringify(sentOrders)
      localStorage.setItem('myOrder', orders)
   }


   function getOrder() {
      setOrderListVisibility(true)
      
      let order = localStorage.getItem('myOrder');
      let orderParse = JSON.parse(order)
      console.log(orderParse)
   };

   return (
      <>
         <Form onSubmit={submitOrder}>
            <Grid container>
               <Grid item xs={6} className={classes.clientContainer}>
                  <Input  
                        name="clientName"
                        label="Nome do Cliente"
                        color="primary"
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
                  <Button
                     className={classes.ordersButton}
                     variant="outlined" 
                     color="primary"
                     onClick={ getOrder }
                  >Visualizar pedidos</Button>
                  <ButtonSubmit 
                     onSubmit={ sentOrder() }/>
                  </Grid>
            </Grid>
         </Form>
         <Popup
            title="Lista de pedidos"
            openPopup={orderListVisibility}
            setOpenPopup={setOrderListVisibility}>
            <OrderList></OrderList>
         </Popup>
   </>
   )
}