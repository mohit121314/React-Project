import React, { Component } from 'react';
import SpeechToText from './speechtotextedit';
import './App.css';
let that;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      audioin: 'I am Jarvis I will Translate your voice to text'
    }
  }
  componentDidMount(){
    that = this;
      try {
        const listener = new SpeechToText(this.onAnythingSaid, this.onFinalised,null);
        listener.startListening();

      } catch (error) {
        console.log(error);
        this.setState({audioin: error});
      }
  }
  onAnythingSaid(text){
    console.log(text);
    that.setState({audioin: text});
  }
  onFinalised(text){
    console.log(text);
    that.setState({audioin: text});
  }
  render() {
    return (
      <div className="App">
        <img src = "https://cloud.google.com/images/products/speech/speech-api-lead.png"></img>
        <h1>"Hi Mohit"</h1>
    <h1>{this.state.audioin}</h1>
    </div>
  );
  }
}

export default App;
