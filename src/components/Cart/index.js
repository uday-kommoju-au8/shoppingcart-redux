import React from 'react';
import './index.css';
import CartItem from '../CartItem';
import {Link, Redirect} from 'react-router-dom';

const Cart = (props) => {
    if(props.shoppingCart.length === 0)
    {
        return (
            <Redirect to={"/"}/>
        )
    }
    let count = 0;
    return (
        <div className="cart">
            <div className="cartRow">
                <div className="cartRowflex">
                    <div className="cartLeft">
                        <div className="cartHeader">
                            <Link to="/" className="backButton">{"<"}</Link>
                            <span className="cartHeading">Order Summary</span>
                        </div>
                        <div className="cartSummary">
                            <span className="first">Items ({count})</span>
                            <span className="second">Qty</span>
                            <span className="third">Price</span>
                        </div>
                        <div className="cardTable">
                            {
                                props.shoppingCart.map(item => <CartItem incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} changeItem={props.changeItem} {...item}/>)
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;