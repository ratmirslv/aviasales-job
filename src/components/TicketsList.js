import React, { Component } from "react";
import Ticket from "./Ticket";
import "./TicketsList.css";
class TicketsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tickets, current } = this.props;

    return (
      <ul className="TicketsList">
        {tickets.map(ticket => (
          <li>
            <Ticket ticket={ticket} current={this.props.current} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TicketsList;
