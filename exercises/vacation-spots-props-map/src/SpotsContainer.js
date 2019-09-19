import React from 'react';
import Spot from './Spot';

const vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ];


const SpotsContainer = props => {
    
    
    const mappedSpots = vacationSpots.map((spot, i) => <Spot key={spot.place.i} place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />);
        return (
            <div>
                {mappedSpots}
            </div>
    )
}

export default SpotsContainer