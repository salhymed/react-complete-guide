import React, { useRef } from 'react';

import classes from './AddProduct.module.css';

function AddProduct(props) {
  const titleRef = useRef('');
  const priceRef = useRef('');
  const descriptionRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const product = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value
     
    };

    props.onAddProduct(product);
    titleRef.current.value=''
    priceRef.current.value=''
    descriptionRef.current.value=''

  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='prce'>Price</label>
        <input id='price' ref={priceRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Description</label>
        <input type='text' id='description' ref={descriptionRef} />
      </div>
      <button>Add Product</button>
    </form>
  );
}

export default AddProduct;
