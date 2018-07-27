import React, { Component } from "react";
import Ticketstyle from "./Ticket.css";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { ticket } = this.props;
    return (
      <div className="Ticketstyle">
        <div className="TicketBuy">
          <button className="Button">{`Купить за ${ticket.price}`}</button>
        </div>
        <div className="TicketInfo">
          <p>{ticket.origin_name}</p>
          <p>to {ticket.destination_name}</p>
        </div>
      </div>
    );
  }
}

export default Ticket;
