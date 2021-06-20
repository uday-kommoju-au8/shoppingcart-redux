import React from 'react';
import './index.css';

const ListedItem = (props) => {
    
    return (
        <div className='listing'>
            <div className='listingTop'>
                <img src={props.img_url} alt=""/>
            </div>
            <div className="listingDetails">
                <span>
                    {props.name}
                </span>
                <div className="listingAlign">
                    <div  className='listingPricing'>
                        <span >
                          ₹{props.price}
                        </span>
                    </div>
                    <button className='blueButton' onClick = {() => props.addItem(props.id)}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ListedItem;