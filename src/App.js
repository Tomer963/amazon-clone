import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <Header />

      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <h1>check out</h1>
          </Route>
          <Route path='/login'>
            <h1>login</h1>
          </Route>
          <Route path='/'>
            <h1>home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
