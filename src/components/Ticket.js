import React, { Component } from "react";
import ticketStyle from "./Ticket.css";
import lineairplane from "../lineairplane.png";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { ticket } = this.props;
    return (
      <div className="ticketStyle">
        <div className="ticketBuy">
          <button className="button">{`Купить за ${ticket.price}`}</button>
        </div>
        <div className="ticketInfo">
          <div className="departure">
            <p className="departureTime">{ticket.departure_time}</p>
            <p className="departureCity">
              {`${ticket.origin}, ${ticket.origin_name}`}
            </p>
            <p className="departureDate">{ticket.departure_date}</p>
          </div>
          <div className="transfers">
            <p className="transfersInfo">{`${ticket.stops} Пересадок`}</p>
            <div className="transfersLine">
              <img src={lineairplane} alt="airplane" />
            </div>
          </div>
          <div className="destination">
            <p className="destinationTime">{ticket.arrival_time}</p>
            <p className="destinationCity">
              {`${ticket.destination}, ${ticket.destination_name}`}
            </p>
            <p className="destinationDate">{ticket.arrival_date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
