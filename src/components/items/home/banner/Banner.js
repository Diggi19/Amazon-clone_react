import React from 'react'
import './banner.css'
const Banner = () => {
    return (
        <div className="banner__container">
            <div className="banner__contents">
                <div className="banner__text">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/new_logos/Amazon_Prime_Logo_White_Large._CB471460684_.png" alt="prime logo"/>
                    <h1>Watch now</h1>
                    <h3>included with prime</h3>
                    <button className="banner__btn">Join Now</button>

                </div>
                
            </div>
            <div className="banner__blure"></div>
            
        </div>
    )
}

export default Banner



// background Image
// some text