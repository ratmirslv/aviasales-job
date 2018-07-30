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
          <button className="button">
            Купить <br /> за {"\n" + ticket.price + " \u20BD"}
          </button>
        </div>
        <div className="ticketInfo">
          <div className="departure">
            <div className="departureTime">{ticket.departure_time}</div>
            <div className="departureCity">
              {`${ticket.origin}, ${ticket.origin_name}`}
            </div>
            <div className="departureDate">{ticket.departure_date}</div>
          </div>
          <div className="transfers">
            <div className="transfersInfo">{`${ticket.stops} Пересадок`}</div>
            <div className="transfersLine">
              <img src={lineairplane} alt="airplane" />
            </div>
          </div>
          <div className="destination">
            <div className="destinationTime">{ticket.arrival_time}</div>
            <div className="destinationCity">
              {`${ticket.destination}, ${ticket.destination_name}`}
            </div>
            <div className="destinationDate">{ticket.arrival_date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
