import React from 'react';
import "./style.scss";

function CartFooter({total}) {
    const {count,price} = total;
    return (
        <div className="cart__footer">
            <div className="cart__footer-count"> {count} единицы</div>
            <div className="cart__footer-price">{price} руб</div>
        </div>
    )
}

export default CartFooter