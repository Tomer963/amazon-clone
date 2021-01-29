import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

const App = () => {
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
          <h1>login</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
