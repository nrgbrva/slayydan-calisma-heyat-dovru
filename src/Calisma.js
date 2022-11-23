import React, { Component } from "react";
class Calisma extends Component {
  state = {
    sender: "a",
    reciever: "b",
    amount: 1,
    p: true
  };
  getData = () => {
    fetch("https://acb-api.algoritmika.org/api/transaction")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          sender: data[0].from,
          reciever: data[0].to,
          amount: data[0].amount
        });
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    let { sender, reciever, amount, p } = this.state;
    return (
      <div>
        {p ? (
          <div>
            {sender}
            {reciever}
            {amount}
          </div>
        ) : (
          "hello"
        )}
      </div>
    );
  }
}
export default Calisma;
