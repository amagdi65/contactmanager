import React, { Component } from "react";

export class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.id
        })
      );
  }
  render() {
    return <div />;
  }
}

export default Test;
