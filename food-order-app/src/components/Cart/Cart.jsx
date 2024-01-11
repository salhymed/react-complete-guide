import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
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

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
