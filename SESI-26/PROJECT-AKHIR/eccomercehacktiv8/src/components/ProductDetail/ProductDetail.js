import axios from "../../api/axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct} from "../../redux/actions/productActions";
import Header from "../Header/Header";

function ProductDetail(){
    const PRODUCT_URL = "/products";

    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    
    console.log(product);
    
    const fetchProductDetail = async() => {
        const response = await axios 
        .get(`${PRODUCT_URL}/${productId}`)
        .catch((err)=>{
            console.log(err);
        });
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        } 
    }, [productId]);
    return(
        <>
        <div>
            <Header/>
            <h1>Product Detail</h1>
            {Object.keys(product).length === 0 ? (
                <div>...loading</div>
            ):(
            <div className="card ">
                <div className="card-body d-flex flex-column h-100">
                    <img src={image} className="card-img-top py-3 m-auto" alt="..."/>
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">{category}</p>
                        <p className="card-text">${price}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <input type="submit" name="" value="Add to Cart" className="w-50 btn btn-danger"/>
                    </div>
                </div>
            </div>
            )}
        </div>
        </>
    )
}

export default ProductDetail;