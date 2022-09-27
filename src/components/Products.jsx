import React, { useState, useEffect } from 'react'
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

  const [products, setProducts] = useState([]);
  useEffect(() => {
    let mounted = true;
    fetch('http://127.0.0.1:8000/products/?limit=10&offset=0', { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts(data['results']);
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <Container>
      {
        products.map(item => (
          <div onClick={navigateToProduct}>
            <Product item={item} key={item.id} />
          </div>
        ))
      }
    </Container>
  )
}
