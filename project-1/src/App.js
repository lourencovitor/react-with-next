import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    name: "Vitor",
    counter: 0,
  };

  heandlePClick = () => this.setState({ name: "Junior" });

  handleAClick = (event) => {
    event.preventDefault();
    const counter = this.state.counter;
    const nextCounter = counter + 1;
    this.setState({ counter: nextCounter });
  };

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.heandlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
