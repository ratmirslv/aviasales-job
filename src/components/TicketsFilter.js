import React, { Component } from "react";
import "./TicketsFilter.css";

class TicketsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxAll: true,
      checkbox0: true,
      checkbox1: true,
      checkbox2: true,
      checkbox3: true
    };
  }
  checkedFilter = e => {
    const value = e.target.value;
    const checked = e.target.checked;
    const name = e.target.name;
    const data = this.props.data;
    const tickets = this.props.tickets;
    this.setState({ [name]: checked });
    if (checked) {
      const filterData = data.filter(item => item["stops"] === +value);
      filterData.forEach(item => tickets.push(item));
      this.props.update({
        tickets: tickets
      });
    } else {
      const filterData = tickets.filter(item => item["stops"] !== +value);
      this.props.update({
        tickets: filterData
      });
      this.setState({ checkboxAll: false });
    }
  };
  checkedAllTickets = e => {
    const checked = e.target.checked;
    const data = this.props.data;

    if (checked) {
      this.setState({
        checkboxAll: true,
        checkbox0: true,
        checkbox1: true,
        checkbox2: true,
        checkbox3: true
      });

      this.props.update({
        tickets: data
      });
    } else {
      this.setState({
        checkboxAll: false
      });
    }
  };
  handleClickRub = () => {
    this.props.update({
      currency: "rub"
    });
  };
  handleClickUsd = () => {
    this.props.update({
      currency: "usd"
    });
  };
  handleClickEur = () => {
    this.props.update({
      currency: "eur"
    });
  };
  render() {
    return (
      <div className="filterStyle">
        <div className="currencies">
          <div className="currenciesHeader">Валюта</div>
          <div className="currenciesButtons">
            <button
              className={this.props.currency === "rub" ? "rub active" : "rub"}
              onClick={this.handleClickRub}
            >
              rub
            </button>
            <button
              className={this.props.currency === "usd" ? "usd active" : "usd"}
              onClick={this.handleClickUsd}
            >
              usd
            </button>
            <button
              className={this.props.currency === "eur" ? "eur active" : "eur"}
              onClick={this.handleClickEur}
            >
              eur
            </button>
          </div>
        </div>
        <div className="filterTransfers">
          <div className="TransfersHeader">Количество пересадок</div>
          <div className="filterItems">
            <div className="filterItem">
              <input
                id="all"
                type="checkbox"
                checked={this.state.checkboxAll}
                name="checkboxAll"
                value="all"
                onChange={this.checkedAllTickets}
              />
              <label htmlFor="all">
                <span />
                Все
              </label>
            </div>
            <div className="filterItem">
              <input
                id="none"
                type="checkbox"
                checked={this.state.checkbox0}
                name="checkbox0"
                value="0"
                onChange={this.checkedFilter}
              />
              <label htmlFor="none">
                <span />
                Без пересадок
              </label>
            </div>
            <div className="filterItem">
              <input
                id="one"
                type="checkbox"
                checked={this.state.checkbox1}
                name="checkbox1"
                value="1"
                onChange={this.checkedFilter}
              />
              <label htmlFor="one">
                <span />1 пересадка
              </label>
            </div>
            <div className="filterItem">
              <input
                id="two"
                type="checkbox"
                checked={this.state.checkbox2}
                name="checkbox2"
                value="2"
                onChange={this.checkedFilter}
              />
              <label htmlFor="two">
                <span />2 пересадки
              </label>
            </div>
            <div className="filterItem">
              <input
                id="three"
                type="checkbox"
                checked={this.state.checkbox3}
                name="checkbox3"
                value="3"
                onChange={this.checkedFilter}
              />
              <label htmlFor="three">
                <span />3 пересадки
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketsFilter;
