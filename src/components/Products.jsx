import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../data';
import { Product } from './Product';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Products = () => {
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate('/product');
  }

  return (
    <Container>
      {
        popularProducts.map(item => (
          <div onClick={navigateToProduct}>
            <Product item={item} key={item.id} />
          </div>
        ))
      }
    </Container>
  )
}
