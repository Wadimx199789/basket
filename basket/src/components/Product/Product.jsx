import React from 'react';
import "./style.scss";
import ButtonDel from '../ButtonDel/ButtonDel';

function Product({product,deleteProduct,increase,decrease,changeValue}) {
    const {img,priceTotal,count,title,id} = product;
    return (
        <div className="cart__product">
            <div className="cart__product-img">
                <img src={`./${img}`} alt="macbook" />
            </div>
            <div className="cart__product-title">{title}
            </div>
            <div className="cart__product-count">
                <input type="number" className="cart__product-input" min="1" max="100" value={count} onChange={(e)=>{changeValue(id,e.target.value)}} />
                <div className="cart__product-controls">
                    <button type="button" className="cart__product-up" onClick={()=>increase(id)}>
                        <img src="./up.svg" alt="up" />
                    </button>
                    <button type="button" className="cart__product-down" onClick={()=>decrease(id)}>
                        <img src="./down.svg" alt="down" />
                    </button>
                </div>
            </div>
            <div className="cart__product-price">{priceTotal} руб.</div>
            <ButtonDel deleteProduct={deleteProduct} id={id}/>
        </div>
    )
}

export default Product