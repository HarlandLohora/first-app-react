import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import react from "./assets/logo.png"
const harland = "https://media.licdn.com/dms/image/C4E03AQGXFMXlW2kJgQ/profile-displayphoto-shrink_200_200/0?e=1531958400&v=beta&t=D9pDwcUc2MaaQB9vWwQOj1zT6hH6-zt_NpyuGGkmou0";

class App extends Component {
  state={
    name:"Harland Lohora",
    favMovies:["Gran Torino","el pasajero","Ratatouille"]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>{this.state.name}</h1>
        {this.state.favMovies.map(m=>{
          return(
          <p>{m}</p>
          );
        })}
        <img src={harland}/>
      </div>
    );
  }
}

export default App;
