import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPages from './Pages/LandingPages';
import Details from './Pages/Details';
import CheckOut from './Pages/CheckOut';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPages />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
