import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degrees: null,
      type: 'fahrenheit',
      convertedValue: '\0'
    };

    this.handleDegrees = this.handleDegrees.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleConvert = this.handleConvert.bind(this);
  }

  handleDegrees(event) {
    this.setState({degrees: event.target.value});
  }

  handleType(event) {
    this.setState({type: event.target.value});
  }

  handleConvert(event) {
    let degrees = this.state.degrees;
    if (isNaN(degrees) || degrees === null)
    {
      alert("Please enter degrees as a number.");
      this.setState({convertedValue: '\0'});
    } else {
      this.setState({convertedValue: this.convert(this.state.degrees, this.state.type)});
    }
    event.preventDefault();
  }

  convert(degrees, type) {
    return ((type === 'fahrenheit') ? 
      Number(((Number(degrees) - 32) * 5 / 9).toFixed(2)) + " °C" : 
      Number((Number(degrees) * 9 / 5 + 32).toFixed(2)) + " °F");
  }

  render() {
    
    return(
      <div id="temperature-converter-div">
        <h1>Temperature Converter</h1>
        <form id="converter-form" onSubmit={this.handleConvert}>
          <label htmlFor="degrees-input" id="degrees-label">
            Degrees<br />
            <input value={this.state.degrees} id="degrees-input" onChange={this.handleDegrees}/>
          </label>
          <label htmlFor="type-select" id="type-label">
            Type <br />
            <select value={this.state.type} onChange={this.handleType} id="type-select">
              <option value="fahrenheit">Fahrenheit</option>
              <option value="celsius">Celsius</option>
            </select>
          </label>
          <input type="submit" value="Convert" id="convert-btn"/>
          <div id="result">Result<br /><p id="value">{this.state.convertedValue}</p></div>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
