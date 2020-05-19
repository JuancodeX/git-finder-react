import React from 'react';

import './styles.css';

function UserData({ user }) {
  return (
    <>
      <div className="user-data">
        <h1>{user.login}</h1>

        <img src={user.avatar_url} alt="user" />

        <ul>
          <li>Seguidores: <strong>{user.followers}</strong></li>
          <li>Seguindo: <strong>{user.following}</strong></li>
          <li>Repositórios: <strong>{user.public_repos}</strong></li>
          <li><a href={user.html_url} target="_blank">Ver Perfil</a></li>
        </ul>
      </div>
    </>
  );
}

export default UserData;