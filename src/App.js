import React, {useState} from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/main";
import ConfigContext from './Context/ConfigContext';

import Home from "./pages/home";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import NewMovie from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";

function App() {

  let [indice,setIndice] = useState(19)

  return (
    <div className="principalDiv">
      <ConfigContext.Provider value={{indice,setIndice}}>
        <Router>
          <div className="principalDiv_cl">
            <Main />
          </div>

          <div className="principalDiv_cl">
            <Switch>
              <Route path="/home" exact={true}>
                <Home />
              </Route>

              <Route path="/popular" exact={true}>
                <Popular />
              </Route>

              <Route path="/new-movies" exact={true}>
                <NewMovie />
              </Route>

              <Route path="/Search" exact={true}>
                <Search />
              </Route>

              <Route path="/movie/:id" exact={true}>
                <Movie />
              </Route>

              <Route path="*" exact={true}>
                <Error404 />
              </Route>
            </Switch>
          </div>
        </Router>
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
