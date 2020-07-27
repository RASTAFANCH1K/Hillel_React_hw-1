import React from 'react';
import CarItem from '../CarItem/CarItem';
import CarItemsCss from './CarItems.module.css';

const CarItems = ({amountOfcars, filteredCars}) => {
  const arrOffilteredCars = amountOfcars.filter(({color}) => filteredCars ? color.includes(filteredCars) : color);
  const carItems = arrOffilteredCars.map(car => <CarItem key={car.id} car={car} />);
 
  return (
    <div>
      <div>Amount of cars: {amountOfcars.length}</div>
      <ol className={CarItemsCss.frame}>{carItems}</ol>
    </div>
  );
};

export default CarItems;