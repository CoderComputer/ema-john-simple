import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    let price = 0;
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        price = product.price + price;
    }

    let ShippingCost = 0;
    if(price > 15){
        ShippingCost = 3.25;
    }
    else if(price > 35){
        ShippingCost = 0;
    }
    else if(price > 0){
        ShippingCost = 12.35
    }

    let tax = 0;
    tax = formatNumber(price/5);
    
    

    const grandTotal = formatNumber(price + ShippingCost + tax);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
    <p>Product Price: ${formatNumber(price)}</p>
    <p>Shipping Cost: ${formatNumber(ShippingCost)}</p>
    <p>Tax + Vat: {tax}</p>
    <p><b>Total: {grandTotal}</b></p>
        </div>
    );
};

export default Cart;