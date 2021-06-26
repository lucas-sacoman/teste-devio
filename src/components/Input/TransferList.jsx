import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import React, {  useEffect, useState  } from 'react';
import axios from 'axios';
import { SearchTwoTone } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  searchPaper: {
    width: 453,
    marginLeft: '5rem',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  searchInput: {
    marginLeft: theme.spacing(1.5),
    flex: 1,
  },
  
  pizzaImg: {
    width: 50,
    height: 50,
    marginLeft: 50,
    marginRight: 50
  },

  textItem: {
    fontFamily: 'Poppins',
    display: 'flex',
    padding: '0 6rem 0 3rem',
    alignItems: 'center',
    margin: '2rem 6rem',
  },

  listRoot: {
    fontFamily: 'Poppins',
    marginTop: theme.spacing(1),
    marginLeft: '5rem',
    width: 460,
    maxHeight: 450,
    overflow: 'auto',
    '& li:hover': {
        cursor: 'pointer',
        backgroundColor: '#E3E3E3'
    },
    '& li:hover .MuiButtonBase-root': {
        display: 'block',
        color: '#000',
    },
    '& .MuiButtonBase-root': {
        display: 'none'
    },
    '& .MuiButtonBase-root:hover': {
        backgroundColor: 'transparent'
    }
}
}))

export default function TransferList(props) {

  const { values, setValues } = props;
  let orderedFoodItems = values.orderDetails;

  const classes = useStyles();

  const [foodList, setFoodList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/data')
    .then((response) => {
      setFoodList(response.data);
      setSearchList(response.data);
    })
  }, [])

  useEffect(() => {
    let x = [...foodList];
    x = x.filter(y => {
        return y.title.toLowerCase().includes(searchKey.toLocaleLowerCase())
            && orderedFoodItems.every(item => item.id !== y.id)
    });
    setSearchList(x);
  }, [searchKey, orderedFoodItems])

  const addFoodItem = foodItem => {
    let x = {
        orderMasterId: values.orderMasterId,
        orderDetailId: 0,
        foodItemId: foodItem.id,
        quantity: 1,
        foodItemPrice: foodItem.price,
        foodItemName: foodItem.title
    }
    setValues({
        ...values,
        orderDetails: [...values.orderDetails, x]
    })
  }

  return (
    <>
      <Paper className={classes.searchPaper}>
        <InputBase
          className={classes.searchInput}
          value={searchKey}
          onChange={e => setSearchKey(e.target.value)}
          placeholder="Digite aqui sua pizza" />
        <IconButton>
          <SearchTwoTone />
        </IconButton>
      </Paper>
      <List className={classes.listRoot}>
        {searchList.map((food, index) => (
          <ListItem key={index} onClick={e => addFoodItem(food)}>
            <ListItemText>
              <img className={classes.pizzaImg} src="https://image.flaticon.com/icons/png/512/1369/1369578.png" alt="pizza" />
            </ListItemText>
            <div className={classes.textItem}>
              <ListItemText 
                primary={food.title}
                primaryTypographyProps={{
                  component: 'h2',
                  style: {
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: '1.2rem'
                  }
                }}
                secondary={'R$ ' + food.price}          
              />
            </div>
            <ListItemSecondaryAction>
              <IconButton onClick={e => addFoodItem(food)}>
                <ExposurePlus1Icon />
                <ArrowForwardIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  )
}