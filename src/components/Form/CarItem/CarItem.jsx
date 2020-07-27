import React from 'react';

const CarItem = ({car}) => {
  const { id, model, color } = car;

  return (
    <li>id: {id}, model: {model}, color: {color}</li>
  );
};

export default CarItem;