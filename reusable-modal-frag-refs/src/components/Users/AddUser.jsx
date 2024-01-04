import React, { useRef, useState } from 'react';
import Card from '../UI/Card';

import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

function AddUser(props) {
  const [error, setError] = useState('','');
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (ev) => {
    ev.preventDefault();
    const enteredName =  nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value
    
    if (enteredName.length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'invalid name',
        message: 'please provide a real name'
      })
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: 'invalid age',
        message: 'please provide a correct age'
      })
      return;
    }

    props.onAddUser(enteredName, enteredAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const modalDismiss =() => {
    setError();
  }

  return (
    <Wrapper>
      { error && <ErrorModal onConfirm={modalDismiss} 
                              title={error.title} 
                              message={error.message}>
                  </ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username:</label>
          <input
            autoComplete="false"
            id="username"
            type="text"
            ref={nameInputRef}
          />

          <label htmlFor="age"> Age:</label>
          <input id="age" 
                  type="text" 
                  ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
