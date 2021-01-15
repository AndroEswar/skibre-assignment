import React, { Component } from "react";
import { contactUrlDup } from "../../apiManager/apiConstants";
import "./contact.css"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: ""
    };
  }

  componentDidMount() {
    fetch(contactUrlDup)
      .then(response => response.json())
      .then(data => this.setState({ contact: data }));
  }

  render() {
    const { contact } = this.state;
    return (
      <div className="Contact-content">
        {contact.data}
      </div>
    )
  }
}

export default Contact;
