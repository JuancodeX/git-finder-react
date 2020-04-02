import React from 'react';

import './styles.css';

import { FaStar } from 'react-icons/fa';

function RepositoriesList({ repositories }) {

  const list = repositories.map(repo => (
    <ul key={repo.id}>
      <li>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        
        <div className="basic-data">
          <div className="circle"></div>
          <p>{repo.language ? repo.language : "Indefinido"}</p>
          <p><FaStar size="18px" style={{marginTop: "2px", marginLeft: "5px", marginRight: "5px"}}/>{repo.stargazers_count}</p>
        </div>
      </li>
    </ul>
  ))

  return (
    <div className="container-repos">
      <h1>REPOSITÓRIOS</h1>
      <div className="repos-list">
        {list}
      </div>
    </div>
  );
}

export default RepositoriesList;