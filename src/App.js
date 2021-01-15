import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Contact from "./pages/contact/Contact";
import Friends from "./pages/friends/Friends";
import Home from "./pages/home/Home";
import BottomAppBar from "./components/BottomAppBar";
import TopAppBar from "./components/TopAppBar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopAppBar />
          <BottomAppBar />
          <Route exact path="/" component={Home} />
          <Route path="/friends" component={Friends} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
