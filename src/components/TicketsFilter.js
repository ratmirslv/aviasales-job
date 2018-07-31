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
          <div className="currenciesHeader">Валюта</div>
          <div className="currenciesButtons">
            <button className="rub">rub</button>
            <button className="usd">usd</button>
            <button className="eur">eur</button>
          </div>
        </div>
        <div className="filterTransfers">
          <div className="TransfersHeader">Количество пересадок</div>
          <div className="filterItems">
            <div className="filterItem">
              <input id="all" type="checkbox" />
              <label for="all">
                <span />
                Все
              </label>
            </div>
            <div className="filterItem">
              <input id="none" type="checkbox" />
              <label for="none">
                <span />
                Без пересадок
              </label>
            </div>
            <div className="filterItem">
              <input id="one" type="checkbox" />
              <label for="one">
                <span />
                1 пересадка
              </label>
            </div>
            <div className="filterItem">
              <input id="two" type="checkbox" />
              <label for="two">
                <span />
                2 пересадки
              </label>
            </div>
            <div className="filterItem">
              <input id="three" type="checkbox" />
              <label for="three">
                <span />
                3 пересадки
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketsFilter;
