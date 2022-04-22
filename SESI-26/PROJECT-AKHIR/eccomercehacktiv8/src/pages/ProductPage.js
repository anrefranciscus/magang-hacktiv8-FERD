import axios from "../api/axios";

import { useEffect, useState } from "react";
import { Fragment } from "react";
import CardShop from "../components/CardShop/CardShop"
import Header from "../components/Header/Header";

function ProductPage(){
    const PRODUCT_URL = "/products";
    const ACCESS_TOKEN = localStorage.getItem("token");
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetchAllProducts();
    },[]);

    const fetchAllProducts = () => {
        try {
            axios
            .get(PRODUCT_URL,{headers: {Authorization: ACCESS_TOKEN}})
            .then((res)=>{
                console.log(res.data);
                return setProducts(res.data);
            })
            .catch((err)=>{
              console.log("Product tidak ditemukan");  
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>

            <Header/>
            <div className="container">
            <div className="row d-flex">
            {products.map((product, index) =>{
                return (
                    <CardShop product={product} key={index}/>
                )
            })}        
            </div>
            </div>
        </>
        
    )
}

export default ProductPage;