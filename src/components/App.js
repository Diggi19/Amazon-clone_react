import React from 'react'
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import useGlobal from './contextapi/context'
import Authform from './items/authform/Authform'
import Banner from './items/home/banner/Banner'
import Navbar from './items/navbar/Navbar'
import Cart from './items/cart/Cart'
import Singleproduct from './items/home/products/Singleproduct'

const App=()=> {
    const[navchange,setnavchange] = React.useState(false)
    React.useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY >100) {
                setnavchange(true)
            }else{
                setnavchange(false)
            }
        })

        return()=>{
            window.removeEventListener('scroll')
        }
    },[])
    return (
        <Router>
            
                <div className="app__container">
                    <Switch>
                    <Route exact path="/">
                        <div className={navchange?"app__navbarblack":"app__navbar"}>
                            <Navbar/>
                        </div>
                        <div className="app__banner">
                            <Banner/>
                        </div>
                        <div className="app__product">
                            <Singleproduct 
                                id="1000" 
                                title=" Sony Bravia 80 cm (32 inches) HD Ready Smart Android LED TV KD-32W820 (Black) (2021 Model) | with Alexa Compatibility" 
                                price={31890} rating={4} 
                                imageurl="https://m.media-amazon.com/images/I/81IYJG9LSgS._SL1500_.jpg"
                            />
                            <Singleproduct 
                                id="1001" 
                                title="Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery" 
                                price={400} rating={4} 
                                imageurl='https://m.media-amazon.com/images/I/71sxlhYhKWL._SL1500_.jpg'
                            />
                             <Singleproduct 
                                id="1002" 
                                title=" AmazonBasics 139cm (55 inch) 4K Ultra HD Smart LED Fire TV AB55U20PS (Black)" 
                                price={42999 } rating={4} 
                                imageurl='https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg'
                            />
                             <Singleproduct 
                                id="1003" 
                                title="Lumiford U80 Over-Ear Wired Headphones with 40mm Strong Hi-Bass Drivers, Ultra Soft Cushion, Passive Noise Cancellation, Foldable Headphones(Black)" 
                                price={999} rating={4} 
                                imageurl='https://m.media-amazon.com/images/I/51KR44tV3rL._SL1100_.jpg'
                            />
                            <Singleproduct 
                                id="1004" 
                                title="boAt Bassheads 900 Wired On Ear Headphones with Mic (Carbon Black)" 
                                price={699} rating={4} 
                                imageurl='https://m.media-amazon.com/images/I/61xeIT6UHrL._SL1500_.jpg'
                            />
                        </div>
                        <div className="app__product">
                            <Singleproduct 
                                id="1005" 
                                title="Amazon Brand - Symbol Men's Regular Casual Shirt" 
                                price={429} rating={4} 
                                imageurl='https://m.media-amazon.com/images/I/71xq9QtmtYL._UL1500_.jpg'
                            />
                            <Singleproduct 
                                id="1006" 
                                title="Dennis Lingo Men's Solid Slim Fit Casual Shirt" 
                                price={549} rating={4} 
                                imageurl='https://m.media-amazon.com/images/I/61YQd1wdQBL._UL1440_.jpg'
                            />
                             <Singleproduct 
                                id="1007" 
                                title="Dennis Lingo Men's Checkered Slim Fit Casual Shirt" 
                                price={350} rating={4} 
                                imageurl='https://m.media-amazon.com/images/I/71Bo9OtlEtL._UL1440_.jpg'
                            />
                            
                        </div>
                    </Route>
                    <Route path="/cart">
                        <div className="app__navbar">
                            <Navbar/>
                        </div>
                        <div className="app__cart ">
                            <Cart/>
                        </div>
                    </Route>
                    <Route path="/auth">
                        <div className="app__authform">
                            <Authform/>
                        </div>
                    </Route>

                    </Switch>
                </div>
            

        </Router>
    )
}

export default App
