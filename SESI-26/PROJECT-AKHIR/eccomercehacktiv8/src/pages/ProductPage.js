import axios from "../api/axios";
import {useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { setProducts } from "../redux/actions/productActions";
import { Fragment } from "react";
import CardShop from "../components/CardShop/CardShop"
import Header from "../components/Header/Header";

function ProductPage(){
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const PRODUCT_URL = "/products";
    const fetchProducts = async () => {
        const response = await axios
        .get(PRODUCT_URL)
        .catch((err)=>{
            console.log(err);
        });
        dispatch(setProducts(response.data));
    }
    
    useEffect(()=> {
        fetchProducts();
    },[]);
    return(
        <>

            <Header/>
            <div className="container">
            <div className="row d-flex">
                <CardShop />
            </div>
            </div>
        </>
        
    )
}

export default ProductPage;