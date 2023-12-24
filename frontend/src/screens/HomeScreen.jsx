import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import { Product } from '../components/Product'
import axios from 'axios'
// import products from '../products'

const HomeScreen = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data)
    };
    fetchProducts();
  }, 
  []) 
  /* Array of dependencies, if we put something in here and that value changes, this use effect is going to run. but we Only want it to run once when the page loads so we just leave it as an empty array*/ 
  

  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((product)=>(
            <Col Key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen