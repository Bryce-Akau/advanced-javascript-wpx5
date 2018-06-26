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
      const post = {
        author: 'Jin',
        text: 'I love DevMtn',
      }
      setTimeout(() => resolve({ data: { post, comments }} ), 5000);
    })
  }
}

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      comments: []
    }
  }

  componentDidMount() {
    fakeAxios.get('http://myserver.com/post-and-comments').then(response => {
      this.setState({
        post: response.data.post,
        comments: response.data.comments
      })
    })
  }
  
  render() {
    return (
      <div>
        <div>
          {this.state.post && <div>
            <div>Post author: {this.state.post.author}</div>
            <div>Post text: {this.state.post.text}</div>
          </div>}
        </div>
        <div>
          <CommentsList comments={this.state.comments} />  
        </div>
      </div>
    );
  }
}
