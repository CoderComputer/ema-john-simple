import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props)
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className>
            <div className = "product-style">
                <div className = "product-img">
                    <img src={img} alt=""/>
                </div>
                <div>
                    <h5 className = "product-name">{name}</h5>
                    <p><small>By : {seller} </small></p>
                    <p>${price}</p>
                    <p><small>Only {stock} left in stock - order soon</small></p>
                    <button className = "main-btn"
                        onClick = {() => props.handleAddProduct(props.product)}
                    ><FontAwesomeIcon icon={faShoppingCart} /> <span> </span>
                    add to cart</button>
                </div>
                
            </div>

        </div>
    );
};

export default Product;