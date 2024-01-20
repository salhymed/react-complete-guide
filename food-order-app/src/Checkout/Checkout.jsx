import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isValidEmail = (value) => value.includes('@');
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [inputValidity, setInputValidity] = useState({
    name: true,
    email: true,
    postalCode: true,
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postalCodeRef = useRef();

  async function confirmHandler(ev) {
    ev.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const emailIsValid = isValidEmail(enteredEmail);
    const postalCodeIsValid = isFiveChars(enteredPostalCode);

    setInputValidity({
      name: nameIsValid,
      email: emailIsValid,
      postalCode: postalCodeIsValid,
    });

    const validForm = nameIsValid && emailIsValid && postalCodeIsValid;
    if (!validForm) {
      return;
    } else {
      const userData = {
        name: enteredName,
        email: enteredEmail,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode,
        items: props.items,
        totalAmount: props.totalAmount,
      };

      props.onSubmitOrderHandler(userData);
    }
  }
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          inputValidity.name ? '' : classes.invalid
        }`}
      >
        <label htmlFor="name">Name:</label>
        <input ref={nameRef} type="text" id="name" />
        {!inputValidity.name && <p>invalid Name</p>}
      </div>
      <div
        className={`${classes.control} ${
          inputValidity.email ? '' : classes.invalid
        }`}
      >
        <label htmlFor="email">Email:</label>
        <input ref={emailRef} type="text" id="email" />
        {!inputValidity.email && <p>invalid Email</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street:</label>
        <input ref={streetRef} type="text" id="street" />
      </div>
      <div
        className={`${classes.control} ${
          inputValidity.postalCode ? '' : classes.invalid
        }`}
      >
        <label htmlFor="postalcode">Postal Code:</label>
        <input ref={postalCodeRef} type="text" id="postalcode" />
        {!inputValidity.postalCode && <p>invalid Postal Code</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City:</label>
        <input ref={cityRef} type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
