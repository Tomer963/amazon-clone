import React from 'react';

import { useStateValue } from './StateProvider';

import './Product.css';

const Product = ({ id, title, image, price, rating }) => {
  const [
    // { basket },
    dispatch,
  ] = useStateValue(); // don't need {basket} here, only for reference

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((
              _
              // i (don't really need the index here , only for reference)
            ) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt='Product' />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
