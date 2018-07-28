import React, { Component } from "react";
import filterStyle from "./TicketsFilter.css";

class TicketsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="filterStyle">
        <div className="currencies">
          <p className="filterHeader">Валюта</p>
          <button className="currenciesName">rub</button>
          <button className="currenciesName">usd</button>
          <button className="currenciesName">eur</button>
        </div>
        <div className="filterTransfers">
          <p className="filterHeader">Количество пересадок</p>
          <form className="filterItem">
            <label>
              <input
                name="all"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
            </label>
            Все
          </form>
          <form className="filterItem">
            <label>
              <input
                name="one"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
              1 Пересадка
            </label>
          </form>
          <form className="filterItem">
            <label>
              <input
                name="two"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
              2 Пересадки
            </label>
          </form>
          <form className="filterItem">
            <label>
              <input
                name="three"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
              3 Пересадки
            </label>
          </form>
          <form className="filterItem">
            <label>
              <input
                name="four"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
              4 Пересадки
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default TicketsFilter;
