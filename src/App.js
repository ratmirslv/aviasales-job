import React, { Component } from "react";
import Ticketslist from "./components/TicketsList";
import TicketFilter from "./components/TicketsFilter";
import "./App.css";
import logo from "./logo.png";
import { tickets } from "./tickets.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" className="logotype" />
        <div className="Content">
          <TicketFilter />
          <Ticketslist tickets={tickets} />
        </div>
      </div>
    );
  }
}

export default App;
