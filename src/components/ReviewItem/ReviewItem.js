import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, hendleRemoveProduct} =props ;
    const {name,img, price, shipping, quantity} = product;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name.length> 20? name.slice(0,20) +'...': name }
                    </p>
                    <p>price: $<span className='orange-color'>{price}</span></p>
                    <p>Shipping: $<small>{shipping}</small></p>
                    <p>Quantity: <small>{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => hendleRemoveProduct()} className='delete-button'>
                        <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;