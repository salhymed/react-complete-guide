import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [entredName, setEnetredName] = useState('');
  const [nameInputTouched, setNameInputTouched] = useState(false);
  
  const enteredNameIsValid = entredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && nameInputTouched;
  const formIsValid = enteredNameIsValid;

  const nameInputHandler = (ev) => {
    setEnetredName(ev.target.value);
  };

  const formSubmitHandler = (ev) => {
    ev.preventDefault();
    
    setNameInputTouched(true);

    console.log(formIsValid);
    if (!enteredNameIsValid) {
      return;
    }

    setEnetredName('');
    setNameInputTouched(false);
  };

  const nameBlurHandler = (ev) => {
    setNameInputTouched(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={nameInputIsInvalid ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="name">Your Name</label>
        <input
          value={entredName}
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && <p className="error-text">name is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
