import React, { Component } from 'react';
import CommentsList from './CommentsList';

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


export default class CommentsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      message: '',
    };
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
      <CommentsList comments={this.state.comments} message={this.state.message} />
    );
  }
}