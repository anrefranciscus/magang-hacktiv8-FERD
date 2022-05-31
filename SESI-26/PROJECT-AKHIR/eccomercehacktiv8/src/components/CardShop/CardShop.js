import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";

function CardShop(){
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
    return(
        <div className="col-lg-3 col-sm-6 col-md-4 my-2" key={id}>
            <div className="card h-100">
                <div className="card-body d-flex flex-column h-100">
                    <img src={image} className="card-img-top py-3 m-auto" alt="..."/>
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">{category}</p>
                        <p className="card-text">${price}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to={`/product/${id}`}>
                        <a href="#" className="card-link mx-3">                       
                            <i className="bi bi-eye"></i>
                         </a>
                         </Link>
                        <input type="submit" name="" value="Add to Cart" className="w-50 btn btn-danger"/>
                    </div>
                </div>
            </div>
        </div>
    );
});
    return <>{renderList}</>
}

export default CardShop;
