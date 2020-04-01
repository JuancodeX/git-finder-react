import React from 'react';
import './styles.css';

function UserData({user}) {
  return (
    <div className="container-user-data">
      <h1>{user.data.login}</h1>
      <div className="image">
        <img src={user.data.avatar_url} alt=""/>
      </div>

      <div className="data">
        <ul>
          <li>Seguidores: {user.data.followers}</li>
          <li>Seguindo: {user.data.following}</li>
          <li>Repositórios: {user.data.public_repos}</li>
        </ul>
      </div>

    </div>

  );
}

export default UserData;
