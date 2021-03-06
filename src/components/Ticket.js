import React, { Component } from "react";
import "./Ticket.css";
import lineairplane from "../img/lineairplane.png";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  ViewCurrency = (price, currency) => {
    switch (currency) {
      case "rub":
        return `${price} ₽`;
      case "usd":
        return `${Math.floor(price / 30)} $`;
      case "eur":
        return `${Math.floor(price / 70)} €`;
      default:
        return price;
    }
  };
  handleClickTicket = () => {
    const { ticket, currency } = this.props;
    alert(`Покупка билета за ${this.ViewCurrency(ticket.price, currency)}`);
  };
  render() {
    const { ticket, currency } = this.props;
    return (
      <div className="ticketStyle">
        <div className="ticketBuy">
          <div className="air-logo">
            <img src={require(`../img/${ticket.carrier}.png`)} alt="logoAir" />
          </div>
          <button className="button" onClick={this.handleClickTicket}>
            Купить <br /> за {this.ViewCurrency(ticket.price, currency)}
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
            {ticket.stops ? (
              <div className="transfersInfo">
                {ticket.stops} пересадк
                {+ticket.stops > 1 ? `и` : `а`}
              </div>
            ) : (
              <div className="transfersInfo" />
            )}
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
