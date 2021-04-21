import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { Row ,Col } from "react-bootstrap";
import Product from '../components/Product';
import { listProducts } from "../actions/productActions";
import Loader from '../components/Loader';
import Message from '../components/Message';
import Pagenate from '../components/Pagenate';
import ProductCarousel from '../components/ProductCarousel';
import { Link } from 'react-router-dom';

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading , error , products , page, pages} = productList;  
        useEffect(()=>{
            dispatch(listProducts(keyword,pageNumber));
        },[dispatch,keyword,pageNumber])    
    return (
        <>
        {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
          <h1> Latest Products</h1> 
          {loading ? (
             <Loader />
          ) :error ? (
              <h3><Message variant='danger'>{error}</Message></h3>
          ):(
         <>     
          <Row>
           {products.map(product=>
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
            </Col>)}
           </Row>
           <Pagenate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />         
           </>
           )}
        </>
    )
}

export default HomeScreen
