import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Checkout from './Checkout/Checkout';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);
  
  const showCartHandler = () =>{
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  const cancelCheckout = () => {
    setCheckoutIsShown(false)
  }
  const showCheckoutForm = () => {
    setCartIsShown(false)
    setCheckoutIsShown(true)
  }

  return (
    <>
    {
      cartIsShown && <Cart onShowCheckoutForm={showCheckoutForm} onClose={hideCartHandler}/>
    }
    {
      checkoutIsShown && <Checkout onCancel={cancelCheckout} />
    }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
