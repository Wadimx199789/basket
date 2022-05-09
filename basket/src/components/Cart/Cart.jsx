import React from 'react';
import "./style.scss";
import CartHeader from '../CartHeader/CartHeader';
import Product from '../Product/Product';
import CartFooter from '../CartFooter/CartFooter';
import data from "./../../data"

function Cart() {
    const [cart,setCart] = React.useState(data);
    const deleteProduct =(id)=>{
        setCart(()=>[...cart].filter((product)=>{
            return id!==product.id
        }))
    }
    const products = cart.map(product=>{
        return <Product product={product} key={product.id} deleteProduct={deleteProduct}/>
    })
    return (
        <div className="cart">
            <CartHeader />
            {products}
            <CartFooter />
        </div>
    )
}

export default Cart