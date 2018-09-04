import React, { Component } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    // Setting up initial state for the form
    // We use a field in state to map to each input
    this.state = {
      title: '',
      body: '',
      errors: []
    };
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <h2>New Post!</h2>
        {this.state.errors.map(err => <div key={err}>{err}</div>)}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={this.state.title}
            onChange={this._titleChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input
            type="text"
            className="form-control"
            id="body"
            placeholder="Enter Body"
            value={this.state.body}
            onChange={this._bodyChanged}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }

  // This event handler actually handles the "submit" event from the form.
  _handleSubmit = e => {
    // Prevent the form from actually submitting
    e.preventDefault();

    // Validate the inputs
    const errors = [];

    if (this.state.title === '') {
      errors.push('Title cannot be blank!');
    }

    if (this.state.body === '') {
      errors.push('Body cannot be blank!');
    }

    // if there are errors, set the state and exit this function (return)
    if (errors.length !== 0) {
      this.setState({ errors });
      return;
    }

    // Otherwise, build out an object which represents our post
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // Send it to app through the prop
    this.props.onNewPost(post);

    // Reset our form
    this.setState({
      errors: [],
      title: '',
      body: ''
    });
  };

  // Handles changes to the title text input
  _titleChanged = e => {
    this.setState({ title: e.target.value });
  };

  // Handles changes to the body text input
  _bodyChanged = e => {
    this.setState({ body: e.target.value });
  };
}
