import React from 'react';

const ReviewItem = (props) => {

    const item = props.item;
    return (
        <div style={{ width: "70%", marginLeft: '300px' }}>
            <h6>{item.name}</h6>
            <p>Price: ${item.price}</p>
            <button className="call-to-action" onClick={() => props.removeItem(item.key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;