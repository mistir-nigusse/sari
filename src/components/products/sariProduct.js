import React from 'react'
import axios from "axios";
import { useEffect,useState } from "react";
import { Grid,Card,CardMedia } from '@material-ui/core';
import { Col, Row } from "react-bootstrap";
import { Product, ProductHorizontal } from "./product";
import { productsSlice } from "../../slices/products";
import { useDispatch, useSelector } from "react-redux";
import { url2 } from "../../utils/url";
import fetch from "isomorphic-fetch";
import UserReques from './request'
function Products() {
    const { viewProduct, viewAllProduct } = UserReques();
    const[products,setProducts]=useState([])
 useEffect(() => {
viewAllProduct().then((data) => {
  console.log(data);
  setProducts(data.products)
});
 },[])
  return (
    <div>sariProduct</div>
  )
}

export default Products