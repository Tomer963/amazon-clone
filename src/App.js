import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/checkout'>
          <h1>check out</h1>
        </Route>
        <Route path='/login'>
          <h1>login</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
