import React, { Component } from 'react';

const fakeAxios = {
  get(url) {
    return new Promise((resolve, reject) => {
      const comments = [{
        name: 'Tyler',
        text: 'DevMtn rocks',
      }, {
        name: 'Ali',
        text: 'Fist bump!'
      }];
      setTimeout(() => resolve({ data: comments} ), 1000);
      // setTimeout(() => reject('there was a problem'), 1000)
    })
  }
}

export default class CommentsList extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      message: ''
    }
  }

  componentDidMount() {
    fakeAxios.get('http://myserver.com/comments').then(response => {
      this.setState({
        comments: response.data,
      })
    }).catch(error => {
      this.setState({
        message: error,
      })
    })
  }
  
  render() {
    return (
      <div>
        <div>
          {this.state.comments.map(x => (
            <div className="comment">
              <div>Name: {x.name}</div>
              <div>Text: {x.text}</div>
            </div>
          ))}
        </div>
        <div>Message: {this.state.message}</div>
      </div>
    );
  }
}
