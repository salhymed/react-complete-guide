import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from '../../Checkout/Checkout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDidSubmit, setDidSubmit] = useState(false);
  const ctx = useContext(CartContext);
  const hasItems = ctx.items.length > 0;
  const onRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const onAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            summary={item.summary}
            amount={item.amount}
            onRemove={onRemoveHandler.bind(null, item.id)}
            onAdd={onAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };
  async function orderSubmitted(userData) {
    setIsSubmitting(true);
    const response = await fetch(
      'https://food-order-app-ab357-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        headers: {
          ContentType: 'application/json',
        },
        body: JSON.stringify(userData, {
          items: ctx.items,
          totalAmount: ctx.totalAmount.toFixed(2),
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  }

  const clearCart = () => {
    ctx.clear();
    props.onClose();
  };
  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <Checkout
          onCancel={props.onClose}
          onSubmitOrderHandler={orderSubmitted}
          items={ctx.items}
          totalAmount={ctx.totalAmount}
        />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const isSubmittingContent = <p>Submitting order ...</p>;
  const isDidSubmitContent = (
    <>
      <p>Order submitted ! Thanks</p>
      <div className={classes.actions}>
        <button type="button" className={classes.button} onClick={clearCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !isDidSubmit && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {isDidSubmit && isDidSubmitContent}
    </Modal>
  );
};

export default Cart;
