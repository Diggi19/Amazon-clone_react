import React from 'react'
import { useStateValue } from '../../contextapi/StateProvider'
import './cartitem.css'
const Cartitem = ({id,title,price,rating,imageurl}) => {
    console.log(title)
    const[state,dispatch] = useStateValue()
    const removeItem = (id)=>{
        dispatch({
            type:"REMOVE_ITEM",
            data:id
        })
    }
    return (
        <div className="item__container">
                <div className="item__img" >
                    <img src={imageurl} alt="test"/>
                </div>
                <div className="item__text">
                    <p className="singlepost__titler">{title}</p>
                    <p className="singlepost__pricer"><small>₹</small>{price}</p>
                    <div className="singlepost__rating">
                        {Array(rating).fill().map((_)=>{
                            return(<p>⭐</p>)
                        })}
                    </div>
                <div className="item__btn">
                    <button onClick={()=>removeItem(id)}>remove item</button>
                </div>
                </div>
            </div>

    )
}

export default Cartitem
