import React from 'react';
import "./style.scss";
import ButtonDel from '../ButtonDel/ButtonDel';

function Product({product,deleteProduct}) {
    const {img,price,count,title,id} = product;
    return (
        <div className="cart__product">
            <div className="cart__product-img">
                <img src={`./${img}`} alt="macbook" />
            </div>
            <div className="cart__product-title">{title}
            </div>
            <div className="cart__product-count">
                <input type="number" className="cart__product-input" min="1" max="100" value={count} />
                <div className="cart__product-controls">
                    <button type="button" className="cart__product-up">
                        <img src="./up.svg" alt="up" />
                    </button>
                    <button type="button" className="cart__product-down">
                        <img src="./down.svg" alt="down" />
                    </button>
                </div>
            </div>
            <div className="cart__product-price">{price} руб.</div>
            <ButtonDel deleteProduct={deleteProduct} id={id}/>
        </div>
    )
}

export default Product