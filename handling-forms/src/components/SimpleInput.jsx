import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const validateName = (name) => {
    return name.trim() !== '';
  };
  const validateEmail = (email) => {
    return email.includes('@');
  };

  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    isValid: nameInputIsValid,
    reset: resetName,
  } = useInput(validateName);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    isValid: emailInputIsValid,
    reset: resetEmail,
  } = useInput(validateEmail);

  const formIsValid = nameInputIsValid && emailInputIsValid;

  const formSubmitHandler = (ev) => {
    ev.preventDefault();

    if (nameInputHasError || emailInputHasError) {
      return;
    }

    resetEmail();
    resetName();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={nameInputHasError ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
        />
        {nameInputHasError && <p className="error-text">Invalid Name</p>}
      </div>
      <div
        className={emailInputHasError ? 'form-control invalid' : 'form-control'}
      >
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="text"
          id="email"
        />
        {emailInputHasError && <p className="error-text">Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
