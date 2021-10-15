import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock, star } = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
            <h2 className="product-name">{name}</h2>
            <p><small>by: {seller}</small></p>
            <p>Price: ${price}</p>
            <Rating initialRating={star}
                fullSymbol="fas fa-star icon-star"
                emptySymbol="far fa-star icon-star"
                /> <span>{star}</span>
            <p><small>only {stock} left in stock - order soon </small></p>
            
            <button onClick={() => props.handleAddToCart(props.product)} className="btn-purchase">{cartIcon} add to cart</button>
            
            </div>
        </div>
    );
};

export default Product;