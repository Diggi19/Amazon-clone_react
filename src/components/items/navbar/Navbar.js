import React from 'react'
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import useGlobal from '../../contextapi/context';
import { useStateValue } from '../../contextapi/StateProvider';

const Navbar = () => {
    const[{basket}]=useStateValue()
    console.log(basket)
    return (
        <div className="nav__container">
            <Link to="/" className="nav__logo">
                <div ><img src="https://nurturedpaws.com/wp-content/uploads/2020/04/amazonlogo-white-1.png" alt="logo"/></div>
            </Link>
            <div className="nav__search">
                <input className="searchfield" type="text" placeholder="search" />
                <button className="search__btn"><SearchIcon/></button>
            </div>
            <div className="nav__btns">
                <div className="signin__box">
                    <h5>hello</h5>
                    <button><Link to="/auth">Signin</Link></button>
                </div>
                <div className="order__box">
                    <h5>Returns</h5>
                    <button><Link to="/checkout"> & Order</Link></button>
                </div>
                <div className="prime__box">
                    <h5>Your</h5>
                    <button>Prime</button>
                </div>
                <div className="cart__box">
                    <Link to="/cart"><ShoppingCartIcon className="cart__icon"/></Link>
                    <h4>{basket?.length}</h4>
                </div>

            </div>

        </div>
    )
}

export default Navbar

{/* logo
search bar
signin
checkout
wishlist */}