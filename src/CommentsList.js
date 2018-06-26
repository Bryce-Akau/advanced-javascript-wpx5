import React, { Component } from 'react';

export default class CommentsList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.comments.map(x => (
            <div className="comment">
              <div>Name: {x.name}</div>
              <div>Text: {x.text}</div>
            </div>
          ))}
        </div>
        <div>Message: {this.props.message}</div>
      </div>
    );
  }
}
