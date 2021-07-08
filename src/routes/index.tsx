import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Register } from "../pages/Register";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Redirect to='/register' />
      </Switch>
    </Router>
  );
}
