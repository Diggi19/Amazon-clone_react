import { TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './authform.css'
const Authform = () => {
    return (
        <div className="auth__container">
            <div className="auth__main">
                <Link className="auth__logo" to="/">
                    <img
                        src="https://www.registrarcorp.com/wp-content/uploads/2021/02/Amazon-logo.png"
                        alt="amazon logo"
                    />
                </Link>
                <form className="auth__form" method="POST">
                    <div className="form__title">
                        <h2>Sign-In</h2>
                        <h4>Sign in to place order</h4>
                    </div>
                    <div className="form__input">
                        <div className="inputs">
                            <h4>Email</h4>
                            <input type="text"/>
                        </div>
                        <div>
                            <h4>Password</h4>
                            <input type="password"/>
                        </div>
                        <div className="auth__btn">
                            <button >Sign-in</button>
                        </div>
                    </div>
                    <div className="auth__terms">
                        <h3>some info</h3>
                    </div>
                </form>
            </div>
            <div className="auth__sub">
                <div className="sepeartor"></div>
                <div className="form__links">
                    <h3>consitions of use</h3>
                    <h3>privacy notice</h3>
                    <h3>help</h3>

                </div>
            </div>
        </div>
    )
}

export default Authform
