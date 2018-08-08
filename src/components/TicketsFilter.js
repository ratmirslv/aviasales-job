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
              <label htmlFor="all">
                <span />
                Все
              </label>
            </div>
            <div className="filterItem">
              <input id="none" type="checkbox" />
              <label htmlFor="none">
                <span />
                Без пересадок
              </label>
            </div>
            <div className="filterItem">
              <input id="one" type="checkbox" checked={false} />
              <label htmlFor="one">
                <span />
                1 пересадка
              </label>
            </div>
            <div className="filterItem">
              <input id="two" type="checkbox" />
              <label htmlFor="two">
                <span />
                2 пересадки
              </label>
            </div>
            <div className="filterItem">
              <input id="three" type="checkbox" />
              <label htmlFor="three">
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
