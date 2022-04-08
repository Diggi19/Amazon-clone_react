import React from 'react'
import { Link } from 'react-router-dom'
import { getbasketTotal } from '../../contextapi/reducer'
import { useStateValue } from '../../contextapi/StateProvider'
import './cart.css'
import Cartitem from './Cartitem'
const Cart = () => {
    const[{basket},dispatch] = useStateValue()
    console.log("insised cart")
    console.log(basket)
    console.log(getbasketTotal)
    return (
        <div className="cart__container">
            <div className="cart__infos">
                <div className="cart__adds">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/SEP/CatPage/Brand/OnePlus/OnePlusBudsPro/NewKv/D27594823_WLA_OnePluseBubsPro_Hero_LP_Mob_1242x450.jpg" alt="add"/>
                </div>
                <div className="cart__total">
                    <div className="total__holder">
                        <h2>Subtotal(items):<strong>{basket.length}</strong></h2>
                        <h3>Total price :<strong>₹{getbasketTotal(basket)}</strong></h3>
                        <div className="subtotal__btn"><button >Proceed to checkout</button></div>
                    </div>
                </div>
            </div>
            <div className="cart__items">
                <h2>Your shopping basket</h2>
                <div className="cart__itemhold">
                    {basket.length !==0 ? basket.map((bskitem)=>{
                        return (
                            <Cartitem id={bskitem.id} title={bskitem.title} price={bskitem.price} rating={bskitem.rating} imageurl={bskitem.imageurl}/>
                        )
                    })
                    
                    :(
                        <div className="cart__emptyhold">
                            <h3 className="cart__empty">No item added</h3>
                            <Link to="/"><button className="cart__btn">Continue shopping</button></Link>
                        </div>
                    )}
                
                </div>
            </div>
        </div>
    )
}

export default Cart
