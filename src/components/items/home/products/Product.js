import React from 'react'
import './product.css'
import Singleproduct from './Singleproduct'
const Product = () => {
    return (
        <div className="product__container">
            <Singleproduct 
                id="1" 
                title="Rotomac tv" 
                price={400} rating={4} 
                imageurl='https://images.samsung.com/is/image/samsung/au_UA50KU6000WXXY_008_Front_black?$PD_GALLERY_L_JPG$'
            />
            <Singleproduct 
                id="1" 
                title="Rotomac tv" 
                price={400} rating={4} 
                imageurl='https://images.samsung.com/is/image/samsung/au_UA50KU6000WXXY_008_Front_black?$PD_GALLERY_L_JPG$'
            />
            
        </div>
    )
}

export default Product


// Container
// item mapped to single item