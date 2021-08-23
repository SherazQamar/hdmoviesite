import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../elements/Header/Header";
import Movie from "../Movie/Movie";
import NotFound from "../elements/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} />
          <Route component={NotFound} exact />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
