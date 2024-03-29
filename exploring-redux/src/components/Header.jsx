import classes from './Header.module.css';

import { authActions } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              {isAuthenticated && <button onClick={logout}>Logout</button>}
            </li>
          </ul>
        )}
        {!isAuthenticated && (
          <ul>
            <li>{isAuthenticated && <button>Login</button>}</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
