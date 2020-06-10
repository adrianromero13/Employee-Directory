import React from 'react';
import { Container } from 'semantic-ui-react';
import './../../assets/body.css';

const Wrapper = ({ children }) => {
  return (
    <Container fluid className='customBody'>
      {children}
    </Container>
  )
}
export default Wrapper;
