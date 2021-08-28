import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigator from "./components/Navigator";

function App(){
  return <BrowserRouter>
    <Navigator />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </BrowserRouter>
}

export default App;