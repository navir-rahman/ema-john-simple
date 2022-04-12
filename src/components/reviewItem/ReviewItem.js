import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {

    const { name, price, shipping, quantiry, img, id} = props.product;
    return (
        <div className='reviewItem'>
            <div className="item_text">
                <img src={img} alt="" />
                <div>
                    <p>{name}</p>
                    <p>price: ${price}</p>
                    <p>quantiry: {quantiry} </p>
                    <p>shipping price:{shipping}</p>
                </div>
            </div>
            <div onClick={()=>props.handel(id)}>
                <FontAwesomeIcon className='review_icon' icon={faTrashAlt}></FontAwesomeIcon>
            </div>

        </div>
    );
};

export default ReviewItem;