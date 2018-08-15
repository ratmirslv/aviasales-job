import React, { Component } from "react";
import TicketsList from "./components/TicketsList";
import TicketFilter from "./components/TicketsFilter";
import "./App.css";
import logo from "./logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      data: [],
      current: "rub"
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
            current={this.state.current}
          />
          <TicketsList
            tickets={this.state.tickets}
            current={this.state.current}
          />
        </div>
      </div>
    );
  }
}

export default App;
