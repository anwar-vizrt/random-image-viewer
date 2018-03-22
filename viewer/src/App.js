import React, { Component } from 'react';
import './App.css';
import {getRandomInt} from './helper/helper.js'

class App extends Component {

  constructor(){
    super();
      this.state = {
          imageUrl: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4e92e770e4d31eac104497f1c77fa4e8b6bf_1280.jpg',
          header: 'Refresh to see new.',
      };
  };

    componentDidMount() {
        fetch("http://34.240.123.159/photos/random")
            .then(response => {
                return response.json().then(data => {
                    return data['data']
                }).then(data => {
                    return data['hits']

                }).then(hits => {
                    console.log(hits)
                   this.setState( {
                       imageUrl : hits[getRandomInt(hits.length,0)]['webformatURL']
                   })
                }).catch(error => {
                        console.log(error)
                    });
            });
    };

  handleHeaderChange = e => {
    this.setState({
      header: e.target.value,
    });
  };

  render() {
    const randomImageStyle = {
      backgroundImage: `url('${this.state.imageUrl}')`,
    };
    return (
      <div className="ui middle aligned grid">
        <div className="row">
          <div className="random-image" style={randomImageStyle}>
            <div className="eight wide column">
              <h2 id="random-title" className="ui center aligned header">
                {this.state.header}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="five wide column" />
          <div className="six wide column">
            <div className="ui segment">
              <form className="ui form">
                <div className="field">
                  <label>Header</label>
                  <input
                    type="text"
                    name="header"
                    value={this.state.header}
                    onChange={this.handleHeaderChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

