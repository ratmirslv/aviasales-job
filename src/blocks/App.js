import React, { Component } from "react";
import TicketsList from "./TicketsList";
import TicketFilter from "../components/TicketsFilter";
import "./App.css";
import logo from "../img/logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      data: [],
      currency: "rub"
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/ivves")
      .then(res => res.json())
      .then(data => {
        this.setState({ tickets: data.tickets }),
          this.setState({ data: data.tickets });
      })
      .catch(err => console.log(err));
  }
  updateTickets = config => {
    this.setState(config);
  };

  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" className="logotype" />
        <div className="Content">
          <TicketFilter
            tickets={this.state.tickets}
            data={this.state.data}
            update={this.updateTickets}
            currency={this.state.currency}
          />
          <TicketsList
            tickets={this.state.tickets}
            currency={this.state.currency}
          />
        </div>
      </div>
    );
  }
}

export default App;
