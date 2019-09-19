import React from 'react';

const Spot = props => {
    let {place, price,timeToGo} = props;

const styles = {
    border: '1px solid',
    padding: '20px,'
    // backgroundColor: 'red'
}   
    return (
        <div key={Math.random()} style={styles}>
            <h3>Place: {place}</h3>
            <h3>Price: ${price}</h3>
            <h3>Best Season: {timeToGo}</h3>
        </div>

    )


}

export default Spot;