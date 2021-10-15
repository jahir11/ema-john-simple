import React from 'react';

const Cart = (props) => {
    const {cart} = props
    
    /* const totalReduce = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReduce, 0) */
    
    let totalQuantitiy = 0
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1
        }
        total = total + product.price * product.quantity;
        totalQuantitiy = totalQuantitiy + product.quantity
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) / 100 * 10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {totalQuantitiy}</h4>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand-Total: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;