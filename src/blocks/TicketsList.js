import React, { Component } from "react";
import Ticket from "../components/Ticket";
import "./TicketsList.css";
import shortid from "shortid";
class TicketsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tickets } = this.props;

    return (
      <ul className="TicketsList">
        {tickets.map(ticket => (
          <li key={shortid.generate()}>
            <Ticket ticket={ticket} currency={this.props.currency} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TicketsList;
