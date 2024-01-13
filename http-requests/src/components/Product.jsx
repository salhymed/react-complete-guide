import React from 'react';

import classes from './Product.module.css';

const Movie = (props) => {
  return (
    <li className={classes.product}>
      <h2>{props.title}</h2>
      <h3>${props.price}</h3>
      <p>
        {props.description}
      </p>
      {/* <img src={props.imgurl} alt={props.title}/> */}
    </li>
  );
};

export default Movie;
