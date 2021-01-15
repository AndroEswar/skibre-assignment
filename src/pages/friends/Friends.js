import React, { Component } from "react";
import { userUrlDup } from "../../apiManager/apiConstants";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ""
    };
  }

  componentDidMount() {
    fetch(userUrlDup)
      .then(response => response.json())
      .then(data => this.setState({ friends: data }));
  }

  render() {
    const { friends } = this.state;
    console.log(friends)
    return (
      <div className="App">
        {friends.length > 1 ? (
          friends.map(item => {
            return <h1>{item.name}</h1>
          })
        ) : (
          <h1>Not Loaded</h1>
        )}
      </div>
    )
  }
}

export default Friends;
