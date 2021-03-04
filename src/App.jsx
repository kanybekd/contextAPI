import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import Error from "./pages/Error.jsx"
import SingleCocktail from "./pages/SingleCocktail"
import Navbar from "./components/Navbar"

import "./App.css"
function App(){
  return(
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/about">
          <About/>
        </Route>
        <Route  path="/cocktail/:id">
          <SingleCocktail/>
        </Route>
        <Route  path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;