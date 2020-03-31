import React from 'react';

import './styles.css';

import { FaStar } from 'react-icons/fa';

function RepositoriesList() {
  return (
    <div className="container-repos">
      <h1>REPOSITÓRIOS</h1>
      <div className="repos-list">
        <ul>
          <li>
            <h2>Nome do repositório</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum expedita, fugit ad vel atque aut ab dolor, beatae possimus necessitatibus cum tenetur ratione quaerat illo ea, enim quam dignissimos?</p>
            
            <div className="basic-data">
              <div className="circle"></div>
              <p>Python</p>
              <p><FaStar size="18px" style={{marginTop: "2px", marginLeft: "5px", marginRight: "5px"}}/>2</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default RepositoriesList;