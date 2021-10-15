
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AppContext } from './contexts';
import './App.css';
// Importing Route Screens
import Home from './routes/Home'
import Blog from './routes/Blog'
import New from './routes/New'
import Edit from './routes/Edit'
import api from './data';

function App() {
  const [state, setState] = useState(api.state)
  useEffect(() => {
    api.update(state);
    return () => {}
  }, [state])
  return (
    <Router>
      <Switch>
        <AppContext.Provider value={[state, setState]}>
          <Route path="/" exact><Home /></Route>
          <Route path="/new"><New /></Route>
          <Route path="/blog/:id"><Blog /></Route>
          <Route path="/edit/:id"><Edit /></Route>
        </AppContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
