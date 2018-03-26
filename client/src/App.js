import React, { Component } from "react";
import logo from "./logo.svg";
import { Main, Logo, Header, Intro} from './styles';

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Main>
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Intro>{this.state.response}</Intro>
      </Main>
    );
  }
}

export default App;
