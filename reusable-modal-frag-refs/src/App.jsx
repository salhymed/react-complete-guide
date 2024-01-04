import './App.css';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';
import { useState } from 'react';
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevState) => {
      let id = 1;
      if (prevState.length > 0) {
        id = prevState[prevState.length - 1].id + 1;
      }
      return [...prevState, { id: id, username: username, age: age }];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
