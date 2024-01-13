import React, { useState } from 'react';
import ProductLis from './components/ProductsList';

import './App.css';
import { useEffect } from 'react';
import { useCallback } from 'react';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function addProductHandler(product) {
    const response = await fetch(
      'https://productsmanager-8d63b-default-rtdb.europe-west1.firebasedatabase.app/products.json',
      {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // const data = await response.json();

    fetchProductsHandler();
  }

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://productsmanager-8d63b-default-rtdb.europe-west1.firebasedatabase.app/products.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong !');
      }

      const data = await response.json();
      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          description: data[key].description,
        });
      }
      setProducts(loadedProducts);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  let content = '';
  if (isLoading) {
    content = <p>Loading ...</p>;
  } else if (!error && products.length === 0) {
    content = <p>No products to show</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = <ProductLis products={products} />;
  }

  return (
    <React.Fragment>
      <section>
        <AddProduct onAddProduct={addProductHandler} />
      </section>
      <section>
        <button onClick={fetchProductsHandler}>Fetch Products</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
