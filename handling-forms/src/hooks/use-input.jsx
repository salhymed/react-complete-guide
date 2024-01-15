import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnetredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(enteredValue);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (ev) => {
    setEnetredValue(ev.target.value);
  };

  const inputBlurHandler = (ev) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnetredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
