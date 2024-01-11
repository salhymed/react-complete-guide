import React, { useCallback, useState } from 'react';
import './App.css';
import Button from './components/UI/Button';
import DemoOutput from './components/Demo/DemoOutput';

const  App = () => {

  const [showP, setShowP] = useState(false)
  const [allowToggle, setallowToggle] = useState(false)
  console.log('app running')

  const togglePHandler = useCallback(() => {
    if(allowToggle){
      setShowP(prevShowP => !prevShowP)
    }
  },[allowToggle])

  const allowToggleHandler = () =>{
    setallowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there !</h1>
     <DemoOutput show={showP} />
     <Button onClick={allowToggleHandler}>Allow Toggle</Button> 
     <Button onClick={togglePHandler}>toggle</Button> 
    </div>
  );
}

export default App;
