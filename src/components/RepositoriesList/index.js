import React from 'react';

import { FaStar } from 'react-icons/fa';

import './styles.css';

function RepositoriesList({ repos }) {
  return (
    <div className="repos">
      <h1>Repositórios</h1>

      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <strong>{repo.name}</strong>
            <p>{repo.description}</p>

            <div>
              <p><span></span>{repo.language === null ? "Não definido" : repo.language}</p>
              <p><FaStar size={14} color={"#00bbf9"} style={{ marginRight: "5px" }} />{repo.stargazers_count}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoriesList;