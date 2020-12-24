import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import FavoritePage from "./views/FavoritePage/FavoritePage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route
          exact
          path="/movie/:movieId"
          component={Auth(MovieDetail, null)}
        />
        <Route exact path="/favorite" component={Auth(FavoritePage, true)} />
      </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
