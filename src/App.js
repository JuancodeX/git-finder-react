import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import UserData from './components/UserData';

import RepositoriesList from './components/RepositoriesList';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      github: {
        url: "https://api.github.com/users",
        clientId: "fd81480048f89c483520",
        clientSecret: "c5eec4cfb1bd49074383709b1362ae8289715168"
      },
      user: {},
      repos: []
    }
  }

  getUser = async e => {
    await axios.get(`${this.state.github.url}/${e.target.value}?client_id=${this.state.github.clientId}&client_secret=${this.state.github.clientSecret}`)
      .then(res => this.setState({ user: res.data }));
  }

  getRepos = async e => {
    await axios.get(`${this.state.github.url}/${e.target.value}/repos?client_id=${this.state.github.clientId}&client_secret=${this.state.github.clientSecret}`)
      .then(res => this.setState({repos: res.data}));

    const element = document.querySelector(".data");

    ReactDOM.render(
    <>
      <UserData user={this.state.user} />
      <RepositoriesList repos={this.state.repos} />
    </>, element);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <input
            className="input"
            type="text"
            onKeyUp={e => {
              this.getRepos(e);
              this.getUser(e);
            }}

            placeholder="Escreva aqui o usuário que está procurando."
          />

          <div className="data"></div>
        </div>
      </div>
    );
  }
}

export default App;
