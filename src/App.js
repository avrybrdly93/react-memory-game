import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import ImageTile from './components/ImageTile';
import Row from './components/Row';
import images from './images.json';
import './App.css';

class App extends Component {
  state = {
    images
  }

  render() {
    return (
      <Wrapper>
        <Row>
          {this.state.images.map(image => {
            <ImageTile/>
          }
          )}
        </Row>
      </Wrapper>
    );
  }
}

export default App;
