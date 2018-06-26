import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComponentThatFetchesData from './MyComponentThatFetchesData';
import MyRenderPropComponent from './MyRenderPropComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyRenderPropComponent>
          {(isLightbulbOn, toggle) => {
            return (
              <div>
                {isLightbulbOn
                  ? <div>
                      <div>light bulb is on</div>
                      <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn" />
                    </div>
                  : <div>
                    <div>light bulb is off</div>
                    <img src="https://images.homedepot-static.com/productImages/fbb45e61-e524-40f5-beca-4ea0058d8fce/svn/ge-incandescent-light-bulbs-50-250-htp2-6-64_1000.jpg" />
                  </div>
                }
                <button onClick={toggle}>Toggle</button>
              </div>
            )
          }}
        </MyRenderPropComponent>
      </div>
    );
  }
}

export default App;
