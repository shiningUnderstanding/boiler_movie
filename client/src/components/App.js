import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import MovieDetail from "./views/MovieDetail/MovieDetail";

function App() {
  return (
    <Router>
      <div>
        {/*
    A <Switch> looks through all its children <Route>
    */}
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/movie/:movieId"
            component={Auth(MovieDetail, null)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
