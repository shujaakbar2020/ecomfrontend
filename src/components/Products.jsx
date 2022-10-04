import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Product } from './Product';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const ShowProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ShowPagination = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0)

  useEffect(() => {
    const url = `http://192.168.0.101/products/?limit=10&offset=${page * 10}`
    // setPage(1)
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data['results']);
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <Container>
      <ShowProducts>
        {
          products.map(item => (
            <Link to={`/products/${item.id}`}>
              <Product item={item} key={item.id} />
            </Link>
            // <div onClick={navigateToProduct}>
            //   <Product item={item} key={item.id} />
            // </div>
          ))
        }
      </ShowProducts>
      <ShowPagination>
        <Pagination count={10} page={page} variant="outlined" shape="rounded" onChange={handleChange} />
      </ShowPagination>
    </Container>
  )
}
