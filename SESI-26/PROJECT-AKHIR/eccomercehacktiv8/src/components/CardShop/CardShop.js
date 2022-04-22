function CardShop({product}){
//    const [category, setCategory] = useState(false);

    return(
        <div className="col-lg-3 col-sm-6 col-md-4 my-2">
            <div className="card h-100">
                <div className="card-body d-flex flex-column h-100">
                    <img src={product.image} className="card-img-top py-3 m-auto" alt="..."/>
                    <h5 className="card-title">{product.title}</h5>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">{product.category}</p>
                        <p className="card-text">${product.price}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <a href="#" className="card-link mx-3">
                            <i className="bi bi-eye"></i>
                        </a>
                        <input type="submit" name="" value="Add to Cart" className="w-50 btn btn-danger"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardShop;
