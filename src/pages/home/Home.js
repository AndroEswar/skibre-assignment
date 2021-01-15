import React, { Component } from "react";
import { homeUrlDup } from "../../apiManager/apiConstants";
// import { get } from "../../apiManager";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch(homeUrlDup)
      .then(response => response.json())
      .then(data => this.setState({ message: data }));
  }

  render() {
    const { message } = this.state;
    return (
      <div className="Home-content">
        {message.data}
      </div>
    )
  }
}

export default Home;
