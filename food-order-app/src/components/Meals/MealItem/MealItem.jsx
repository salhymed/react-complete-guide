import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const submitMeal = (amount) => {
    const item = {
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    };
    ctx.addItem(item);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onSubmitMeal={submitMeal} />
      </div>
    </li>
  );
};

export default MealItem;
