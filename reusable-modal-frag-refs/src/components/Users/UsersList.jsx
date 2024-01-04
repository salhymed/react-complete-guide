import React from 'react';

import Card from '../UI/Card';
import styles from './UsersList.module.css';

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
           N° {user.id} : {user.username} ({user.age} yeaes old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
