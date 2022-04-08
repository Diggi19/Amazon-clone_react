import React from 'react'
import { useStateValue } from '../../../contextapi/StateProvider'
import './singleproduct.css'
const Singleproduct = ({id,title,rating,price,imageurl}) => {
    const[{},dispatch] = useStateValue()
    const addTobasket = (id,title,rating,price,imageurl)=>{
        dispatch({
            type:"ADD_ITEM",
            data:{id,title,rating,price,imageurl}
        })
    }
    return (
        <div className="singlepost">
            <div className="singlepost__container">
                <p className="singlepost__titler">{title}</p>
                <p className="singlepost__pricer"><small>₹</small>{price} </p>
                <div className="singlepost__rating">
                    {Array(rating).fill().map((_)=>{
                        return(<p>⭐</p>)
                    })}
                </div>
                <div className="image__holder">
                    <img src={imageurl} alt={title}/>
                </div>
                <div className="singlepost__btn">
                    <button onClick={()=>{addTobasket(id,title,rating,price,imageurl)}}>Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default Singleproduct
