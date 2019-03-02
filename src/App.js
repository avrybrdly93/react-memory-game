import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import ImageTile from './components/ImageTile';
import Row from './components/Row';
import Header from './components/Header';
import WinModal from './components/WinModal';
import images from './images.json';
import './App.css';

class App extends Component {
  state = {
    images: images,
    previousImages: [],
    score: 0
  }

  gameClick = image => {
    //const image = event.target.alt;
    const AlreadyClicked =
      this.state.previousImages.indexOf(image) > -1;

    if (AlreadyClicked) {
      this.setState({
        images: this.state.images.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        previousImages: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          images: this.state.images.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          previousImages: this.state.previousImages.concat(
            image
          ),
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              images: this.state.images.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              previousImages: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    const {state} = this;
    return (
      <Wrapper>
        <Header />
        <Row>
          {state.images.map((images, i) => (
            <ImageTile
              gameClick={this.gameClick}
              image={images.image}
            />
          )
          )}
          <WinModal/>
          </Row>
      </Wrapper>
    );
  }
}

export default App;
