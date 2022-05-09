import React from 'react';
import "./style.scss";

function CartFooter() {
    return (
        <div className="cart__footer">
            <div className="cart__footer-count"> 3 единицы</div>
            <div className="cart__footer-price">329000 руб</div>
        </div>
    )
}

export default CartFooter