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

export default class MyComponentThatFetchesData extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fakeAxios.get('some url').then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    const comments = this.state.data;
    return (
      <div>
        {comments.map(x => (
          <div className="comment">
            <div>Name: {x.name}</div>
            <div>Text: {x.text}</div>
          </div>
        ))}
      </div>
    );
  }
}