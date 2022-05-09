import React from 'react';
import "./style.scss";

function ButtonDel({deleteProduct,id}) {
    return (
        <div className="cart__product-delete">
            <button type="button" onClick={()=>deleteProduct(id)}>
                <img src="./x.svg" alt="delete" />
            </button>
        </div>
    )
}

export default ButtonDel