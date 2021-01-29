import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';

import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    };
  }, [dispatch]);

  console.log(user);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/checkout' exact>
          <Checkout />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
