import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      referent : []
    }
  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/referents.json')
        .then(res => res.json())
        .then(value =>
            this.setState({
              referent: value[0]
            }));
  }
  render() {
    const { referent } = this.state;
    console.log(referent.poste);
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {referent.poste} {referent.nom}

           Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  }
}

export default App;
