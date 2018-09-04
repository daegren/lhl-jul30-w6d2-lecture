import React, { Component } from 'react';
import PostForm from './PostForm.jsx';
import PostList from './PostList.jsx';

// This variable tracks the id of new posts
// Starting at 101 since the JSON placeholder API gives us 1-100
let nextId = 101;

class App extends Component {
  constructor(props) {
    super(props);

    // Setting up the initial state of the app
    // Since we're going to be showing a list of posts
    // set the initial posts value to an empty array.
    this.state = {
      posts: []
    };
  }

  // React Lifecycle Method
  // Happens when the component gets mounted (loaded) into the DOM
  componentDidMount() {
    // Fetch our posts from the JSON placeholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(posts => this.setState({ posts }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <main>
        <nav className="navbar navbar-collapse navbar-dark bg-dark">
          <a href="#" className="navbar-brand">
            W6D2 Demo
          </a>
        </nav>
        <div className="container">
          <h1>Hello React :)</h1>
          <PostForm onNewPost={this._handleNewPost} />
          <PostList posts={this.state.posts} />
        </div>
      </main>
    );
  }

  // Callback function to handle when the form is submitted.
  // Note we're not hooking directly into the form's submit event,
  // but this is being called when the form has valiadated.
  _handleNewPost = post => {
    post.id = nextId++;
    post.userId = 1;

    this.setState({ posts: [post, ...this.state.posts] });
  };
}
export default App;
