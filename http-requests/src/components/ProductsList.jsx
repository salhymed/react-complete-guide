import React from 'react';

import Product from './Product';
import classes from './ProductsList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['products-list']}>
      {props.products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          imgurl={product.thumbnail}
        />
      ))}
    </ul>
  );
};

export default MovieList;
