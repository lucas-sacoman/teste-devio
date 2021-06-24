import './App.css';
import { Container } from '@material-ui/core';

import Order from './components/Orders'
import { Header } from './components/Header/Header';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Title from './components/Header/Title'

export default function App() {
  return (
    <>
      <Header color="primary">
        <RestaurantIcon
          style={{ fontSize: 55 }}
        />
        <Title />
      </Header>
      <Container maxWidth='lg'>
        <Order />
      </Container>
    </>
  );
}