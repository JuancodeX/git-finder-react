import React, { useState } from 'react';

import { render } from 'react-dom';

import Header from './components/Header';

import UserData from './components/UserData';

import RepositoriesList from './components/RepositoriesList';

import axios from 'axios';

import './global.css';

function App() {
  const github = {
    url: "https://api.github.com/users",
    clientId: "ca745f5529ad8e0b1a38",
    clientSecret: "13c2f516afe495a7f74f5287ed771270b6304eda"
  }; 

  const [user, setUser] = useState({
    data: 0
  });

  function getUser(e) {
    axios.get(`${github.url}/${e.target.value}?client_id=${github.clientId}&client_secret=${github.clientSecret}`)
    .then(({data}) => setUser({ data }));

    const element = (
    <>
      <UserData user={user}/>
      <RepositoriesList/>
    </>
    )

    render(element, document.querySelector(".main-container"));
  }

  return (
    <div className="App">
      <Header/>
      <input type="text" className="input" onKeyUp={getUser}/>
      <div className="main-container">
      </div>
    </div>

  );

}

export default App;
