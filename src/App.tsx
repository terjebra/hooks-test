import React, { Component, StatelessComponent, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import User from "./User";
import { AppContext } from "./Context";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <User />
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
