import React from 'react';
import "./style.scss";

function CartHeader() {
    return (
        <div className="cart__header">
            <div className="cart__header-title">наименование</div>
            <div className="cart__header-count">количество</div>
            <div className="cart__header-cost">стоимость</div>
        </div>
    )
}

export default CartHeader