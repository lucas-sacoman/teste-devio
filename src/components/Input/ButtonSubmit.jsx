import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RoomServiceIcon from '@material-ui/icons/RoomService';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontFamily: 'Poppins',
    marginTop: -1,
    marginLeft: '5rem',
    padding: '0.9rem 10rem'
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        className={classes.button}
        startIcon={<RoomServiceIcon />}
      >
        Enviar pedido
      </Button>
    </div>
  );
}