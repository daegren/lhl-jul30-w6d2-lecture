import React, { Component } from 'react';

// This component represents a single post in our app.
export default class Post extends Component {
  constructor(props) {
    super(props);

    // This component will be fetching the user from the JSON API
    // so we need some state to hold on to the responses value.
    this.state = {
      user: {}
    };
  }

  // React Lifecycle Method
  // On Mount: go and fetch the user for the given post.
  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/users/${
      this.props.post.userId
    }`;

    fetch(url)
      .then(resp => resp.json())
      .then(user => this.setState({ user }));
  }

  render() {
    const { post } = this.props;
    const { user } = this.state;

    return (
      <li className="post">
        <header>
          <h2>{post.title}</h2>
          <h3>{user.name}</h3>
        </header>

        <p>{post.body}</p>
      </li>
    );
  }
}
