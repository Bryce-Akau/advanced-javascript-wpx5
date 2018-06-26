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

const makeHOC = BaseComponent => function() {
  return (
    <BaseComponent />
  )
}

const withData = url => BaseComponent => class extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fakeAxios.get(url).then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    if (this.state.data.length) {
      return <BaseComponent data={this.state.data} />
    } else {
      return <div>Loading...</div>
    }
  }
}

class MyComponentThatFetchesData extends Component {
  render() {
    const comments = this.props.data;
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

// export default makeHOC(MyComponentThatFetchesData)
// export default connect(mapStateToProps)(MyComponent)
export default withData('some fake url')(MyComponentThatFetchesData)
