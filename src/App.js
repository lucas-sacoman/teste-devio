import './App.css';
import { Container, Typography } from '@material-ui/core';

import Order from './components/Orders'
import { Header } from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header>
        <Typography
          gutterBottom
          variant="h1"
          align="center">
            dev.Food
        </Typography>
      </Header>
      <Container maxWidth='lg'>
        <Order />
      </Container>
    </>
  );
}