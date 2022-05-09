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
    const increase =(id)=>{
        setCart(()=>[...cart].map((product)=>{
            if(product.id===id){
               return {
                   ...product,
                   count:++product.count,
                   priceTotal:product.priceTotal*product.count,
               }
            }
            return product;
        }))
    }

    const decrease =(id)=>{
        setCart(()=>[...cart].map((product)=>{
            if(product.id===id){
               return {
                   ...product,
                   count:product.count-1>1?--product.count:1,
                   priceTotal:product.price*product.count,
               }
            }
            return product;
        }))
    }
    const products = cart.map(product=>{
        return <Product product={product} key={product.id} deleteProduct={deleteProduct} increase={increase} decrease={decrease}/>
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