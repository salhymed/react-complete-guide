import React, { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(
        'https://food-order-app-ab357-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error('something went wrong');
      }
      const data = await response.json();
      const meals = [];

      for (const key in data) {
        meals.push(data[key]);
      }
      setMeals(meals);
      setIsLoading(false);
    };

    getMeals().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Fetching Meals ... </p>
      </section>
    );
  }
  if (error) {
    console.log(error);
    return (
      <section className={classes.MealsLoading}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
